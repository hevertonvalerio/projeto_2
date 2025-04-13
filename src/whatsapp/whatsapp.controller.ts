import { Controller, Post, Body } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WhatsappSuccessResponseDto, WhatsappErrorResponseDto } from './dto/whatsapp-response.dto';
import { WebhookRequestDto } from './dto/webhook-request.dto';

@ApiTags('WhatsApp')
@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly whatsappService: WhatsappService) {}

  @Post('send-template')
  @ApiOperation({
    summary: 'Enviar mensagem de WhatsApp usando template',
    description: 'Envia uma mensagem de WhatsApp usando um template pré-configurado do Twilio com variáveis específicas.',
  })
  @ApiResponse({
    status: 201,
    description: 'Mensagem enviada com sucesso',
    type: WhatsappSuccessResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao enviar mensagem',
    type: WhatsappErrorResponseDto,
  })
  async sendTemplateMessage() {
    return await this.whatsappService.sendTemplateMessage();
  }

  @Post('webhook')
  @ApiOperation({
    summary: 'Receber atualizações de status das mensagens',
    description: 'Endpoint que recebe webhooks do Twilio com atualizações de status das mensagens enviadas.',
  })
  @ApiResponse({
    status: 200,
    description: 'Webhook processado com sucesso',
    schema: {
      properties: {
        success: { type: 'boolean', example: true },
        message: { type: 'string', example: 'Webhook processed for message SM1a2b3c4d5e6f7g8h9i0j' },
        status: { type: 'string', example: 'delivered' },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao processar webhook',
    schema: {
      properties: {
        success: { type: 'boolean', example: false },
        error: { type: 'string', example: 'Invalid AccountSid' },
      },
    },
  })
  async handleWebhook(@Body() webhookData: WebhookRequestDto) {
    return await this.whatsappService.handleWebhook(webhookData);
  }
}
