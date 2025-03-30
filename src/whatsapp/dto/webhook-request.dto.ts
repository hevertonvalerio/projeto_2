import { ApiProperty } from '@nestjs/swagger';

export class WebhookRequestDto {
  @ApiProperty({
    description: 'SID único da mensagem',
    example: 'SM1a2b3c4d5e6f7g8h9i0j',
  })
  MessageSid: string;

  @ApiProperty({
    description: 'Status atual da mensagem',
    example: 'delivered',
    enum: ['queued', 'failed', 'sent', 'delivered', 'undelivered', 'read'],
  })
  MessageStatus: string;

  @ApiProperty({
    description: 'Número do WhatsApp que recebeu a mensagem',
    example: 'whatsapp:+5511988399381',
  })
  To: string;

  @ApiProperty({
    description: 'Número do WhatsApp que enviou a mensagem',
    example: 'whatsapp:+14155238886',
  })
  From: string;

  @ApiProperty({
    description: 'ID da conta Twilio',
    example: 'ACea8ce28c609200b26a551159e148e8ae',
  })
  AccountSid: string;
}
