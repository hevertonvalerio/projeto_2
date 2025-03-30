import { Injectable, OnModuleInit } from '@nestjs/common';
import * as twilio from 'twilio';
import { WebhookRequestDto } from './dto/webhook-request.dto';

@Injectable()
export class WhatsappService implements OnModuleInit {
  private client: twilio.Twilio;
  private accountSid: string;
  private authToken: string;
  private fromNumber: string;
  private toNumber: string;
  private contentSid: string;

  onModuleInit() {
    this.validateEnvironmentVariables();
    this.initializeTwilioClient();
  }

  private validateEnvironmentVariables() {
    const {
      TWILIO_ACCOUNT_SID,
      TWILIO_AUTH_TOKEN,
      TWILIO_FROM_NUMBER,
      TWILIO_TO_NUMBER,
      TWILIO_CONTENT_SID,
    } = process.env;

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER || !TWILIO_TO_NUMBER || !TWILIO_CONTENT_SID) {
      throw new Error('Missing required environment variables for Twilio configuration');
    }

    this.accountSid = TWILIO_ACCOUNT_SID;
    this.authToken = TWILIO_AUTH_TOKEN;
    this.fromNumber = TWILIO_FROM_NUMBER;
    this.toNumber = TWILIO_TO_NUMBER;
    this.contentSid = TWILIO_CONTENT_SID;
  }

  private initializeTwilioClient() {
    this.client = twilio(this.accountSid, this.authToken);
  }

  async sendTemplateMessage() {
    try {
      const message = await this.client.messages.create({
        from: this.fromNumber,
        to: this.toNumber,
        contentSid: this.contentSid,
        contentVariables: JSON.stringify({ "1": "12/1", "2": "3pm" }),
      });

      return {
        success: true,
        messageId: message.sid,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async handleWebhook(webhookData: WebhookRequestDto) {
    try {
      // Validar se o webhook veio do Twilio
      if (webhookData.AccountSid !== this.accountSid) {
        throw new Error('Invalid AccountSid');
      }

      // Log do status da mensagem
      console.log(`Message ${webhookData.MessageSid} status updated to: ${webhookData.MessageStatus}`);

      // Aqui você pode adicionar lógica adicional como:
      // - Salvar o status em um banco de dados
      // - Notificar outros sistemas
      // - Enviar confirmações para outros serviços

      return {
        success: true,
        message: `Webhook processed for message ${webhookData.MessageSid}`,
        status: webhookData.MessageStatus,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
}
