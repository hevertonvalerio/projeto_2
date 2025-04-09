# Documentação do Projeto NestJS com Integração WhatsApp

## Fluxos do Sistema

### Fluxo 1: Disparo de Mensagens WhatsApp
- **Descrição**: Processo automatizado de envio de mensagens via WhatsApp
- **Componentes Envolvidos**:
  - Scheduler (agendador)
  - Banco de Dados
  - Fila BullMQ
  - Serviço Twilio
- **Etapas**:
  1. Scheduler executa periodicamente
  2. Consulta registros não notificados no banco
  3. Envia registros para fila BullMQ
  4. Processador da fila envia mensagens via Twilio
  5. Atualiza status no banco de dados

### Fluxo 2: Processamento de Respostas
- **Descrição**: Tratamento de respostas recebidas via WhatsApp
- **Componentes Envolvidos**:
  - Webhook Twilio
  - Parser de Mensagens
  - Serviço RPA
- **Etapas**:
  1. Recebimento de webhook do Twilio
  2. Interpretação da resposta do paciente
  3. Se resposta negativa:
     - Aciona endpoint RPA com token
     - RPA desmarca consulta no sistema Tazi
  4. Atualiza status no banco de dados

### Fluxo 3: Geração de Relatórios
- **Descrição**: Criação de relatórios diários pré-expediente
- **Componentes Envolvidos**:
  - Scheduler diário
  - Gerador de relatórios
  - Sistema de envio
- **Etapas**:
  1. Scheduler executa antes do expediente
  2. Gera lista de presença
  3. Gera lista de ausentes/desmarcados
  4. Exporta relatórios (JSON/CSV/PDF)
  5. Envia para equipe RPA ou por e-mail

### Fluxo 4: Integração com RPA
- **Descrição**: Comunicação segura com equipe de RPA
- **Componentes Envolvidos**:
  - Autenticação por token
  - API de integração
  - Logger centralizado
- **Etapas**:
  1. Validação de token
  2. Processamento da requisição
  3. Registro de logs
  4. Retorno de resposta

### Fluxo 5: Monitoramento e Logs
- **Descrição**: Rastreabilidade das operações
- **Componentes Envolvidos**:
  - Sistema de logging
  - Monitoramento de filas
  - Alertas
- **Etapas**:
  1. Registro de todas as operações
  2. Monitoramento de status das filas
  3. Geração de alertas em caso de falhas
  4. Histórico de operações

## Considerações de Implementação

### Segurança
- Autenticação por token em todas as integrações
- Conformidade com políticas da Twilio
- Logging centralizado para rastreabilidade

### Escalabilidade
- Uso de filas para processamento assíncrono
- Estrutura modular para futuras expansões
- Preparação para integração com sistema Tazi

### Manutenção
- Monitoramento contínuo
- Logs detalhados
- Documentação atualizada 