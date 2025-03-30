import { Controller, Post } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WhatsappSuccessResponseDto, WhatsappErrorResponseDto } from './dto/whatsapp-response.dto';

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
}
