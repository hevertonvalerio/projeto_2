# Documentação do Projeto NestJS com Integração WhatsApp

## Visão Geral
Este projeto é uma aplicação backend desenvolvida com NestJS, framework Node.js progressivo para construção de aplicações server-side. O projeto integra com serviços do WhatsApp através da Twilio, oferecendo uma API REST documentada com Swagger.

## Estrutura do Projeto

### Arquivos de Configuração

#### package.json
- **Descrição**: Arquivo principal de configuração do projeto
- **Dependências Principais**:
  - @nestjs/common: ^11.0.1
  - @nestjs/config: ^4.0.2
  - @nestjs/core: ^11.0.1
  - @nestjs/platform-express: ^11.0.1
  - @nestjs/swagger: ^11.1.0
  - twilio: ^5.5.1
- **Scripts Disponíveis**:
  - `npm run start`: Inicia a aplicação
  - `npm run start:dev`: Inicia em modo desenvolvimento
  - `npm run build`: Compila o projeto
  - `npm run test`: Executa testes unitários
  - `npm run test:e2e`: Executa testes end-to-end
  - `npm run lint`: Executa o linter
  - `npm run format`: Formata o código

#### tsconfig.json
- **Descrição**: Configuração do TypeScript
- **Função**: Define regras de compilação e opções do compilador TypeScript
- **Configurações Principais**:
  - Configurações de compilação
  - Opções de strict mode
  - Configurações de paths e imports

#### eslint.config.mjs
- **Descrição**: Configuração do ESLint
- **Função**: Define regras de linting para manter a qualidade do código
- **Regras Principais**:
  - Padrões de código
  - Regras de estilo
  - Integração com TypeScript

#### .prettierrc
- **Descrição**: Configuração do Prettier
- **Função**: Define regras de formatação do código
- **Configurações**:
  - Tamanho da indentação
  - Estilo de aspas
  - Comprimento máximo de linha

### Estrutura do Código Fonte (src/)

#### main.ts
- **Descrição**: Ponto de entrada da aplicação
- **Função**: Inicializa a aplicação NestJS e configura middlewares globais
- **Funcionalidades**:
  - Configuração do Swagger para documentação da API
  - Inicialização do servidor na porta 3000
  - Configuração de middlewares globais

#### app.module.ts
- **Descrição**: Módulo principal da aplicação
- **Função**: Define os módulos e serviços que serão utilizados na aplicação
- **Configurações**:
  - Importação do ConfigModule para variáveis de ambiente
  - Importação do WhatsappModule para funcionalidades do WhatsApp
  - Configuração de módulos globais

#### app.controller.ts
- **Descrição**: Controlador principal
- **Função**: Define as rotas e endpoints principais da API
- **Endpoints**:
  - GET /: Retorna uma mensagem de saudação

#### app.service.ts
- **Descrição**: Serviço principal
- **Função**: Implementa a lógica de negócios principal
- **Métodos**:
  - getHello(): Retorna uma mensagem de saudação

#### Diretório whatsapp/
- **Descrição**: Módulo específico para funcionalidades do WhatsApp
- **Função**: Contém os componentes relacionados à integração com WhatsApp

## Tecnologias Utilizadas

### Framework e Linguagem
- NestJS (versão 11.0.1)
- TypeScript
- Node.js

### Integrações
- Twilio (serviços de mensagens)
- Swagger (documentação da API)

### Ferramentas de Desenvolvimento
- ESLint (linting)
- Prettier (formatação)
- Jest (testes)

## Funcionalidades

### API REST
- Endpoints documentados com Swagger
- Estrutura modular e escalável
- Integração com serviços externos

### Integração WhatsApp
- Conexão com serviços Twilio
- Processamento de mensagens
- Automação de respostas

### Testes
- Testes unitários
- Testes end-to-end
- Cobertura de código

## Boas Práticas Implementadas

### Código
- Padrões de código consistentes
- Linting e formatação automática
- Arquitetura modular

### Documentação
- Swagger para documentação da API
- Comentários em código
- README atualizado

### Qualidade
- Testes automatizados
- Verificação de tipos com TypeScript
- Configurações de linting

## Como Usar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run start:dev
```

### Produção
```bash
npm run build
npm run start:prod
```

### Testes
```bash
npm run test
npm run test:e2e
```

## Próximos Passos

### Desenvolvimento
1. Implementar funcionalidades específicas do WhatsApp
2. Configurar variáveis de ambiente
3. Implementar testes específicos
4. Expandir documentação Swagger

### Manutenção
1. Atualizar dependências
2. Monitorar logs
3. Realizar backups
4. Manter documentação atualizada

## Suporte
Para suporte e dúvidas, consulte:
- Documentação do NestJS
- Documentação da Twilio
- Issues do projeto

## Documentação Detalhada dos Arquivos

### Arquivos de Configuração

#### package.json
- **Descrição**: Arquivo principal de configuração do projeto
- **Dependências Principais**:
  - @nestjs/common: ^11.0.1
  - @nestjs/config: ^4.0.2
  - @nestjs/core: ^11.0.1
  - @nestjs/platform-express: ^11.0.1
  - @nestjs/swagger: ^11.1.0
  - twilio: ^5.5.1
- **Scripts Disponíveis**:
  - `npm run start`: Inicia a aplicação
  - `npm run start:dev`: Inicia em modo desenvolvimento
  - `npm run build`: Compila o projeto
  - `npm run test`: Executa testes unitários
  - `npm run test:e2e`: Executa testes end-to-end
  - `npm run lint`: Executa o linter
  - `npm run format`: Formata o código

#### tsconfig.json
- **Descrição**: Configuração do TypeScript
- **Função**: Define regras de compilação e opções do compilador TypeScript
- **Configurações Principais**:
  - Configurações de compilação
  - Opções de strict mode
  - Configurações de paths e imports

#### eslint.config.mjs
- **Descrição**: Configuração do ESLint
- **Função**: Define regras de linting para manter a qualidade do código
- **Regras Principais**:
  - Padrões de código
  - Regras de estilo
  - Integração com TypeScript

#### .prettierrc
- **Descrição**: Configuração do Prettier
- **Função**: Define regras de formatação do código
- **Configurações**:
  - Tamanho da indentação
  - Estilo de aspas
  - Comprimento máximo de linha

### Arquivos do Código Fonte

#### main.ts
- **Descrição**: Ponto de entrada da aplicação
- **Função**: Inicializa a aplicação NestJS e configura middlewares globais
- **Funcionalidades**:
  - Configuração do Swagger para documentação da API
  - Inicialização do servidor na porta 3000
  - Configuração de middlewares globais

#### app.module.ts
- **Descrição**: Módulo principal da aplicação
- **Função**: Define os módulos e serviços que serão utilizados na aplicação
- **Configurações**:
  - Importação do ConfigModule para variáveis de ambiente
  - Importação do WhatsappModule para funcionalidades do WhatsApp
  - Configuração de módulos globais

#### app.controller.ts
- **Descrição**: Controlador principal
- **Função**: Define as rotas e endpoints principais da API
- **Endpoints**:
  - GET /: Retorna uma mensagem de saudação

#### app.service.ts
- **Descrição**: Serviço principal
- **Função**: Implementa a lógica de negócios principal
- **Métodos**:
  - getHello(): Retorna uma mensagem de saudação

### Módulo WhatsApp

#### whatsapp.module.ts
- **Descrição**: Módulo específico para funcionalidades do WhatsApp
- **Função**: Configura o módulo de WhatsApp
- **Componentes**:
  - Controllers: WhatsappController
  - Providers: WhatsappService

#### whatsapp.controller.ts
- **Descrição**: Controlador do módulo WhatsApp
- **Função**: Define endpoints relacionados ao WhatsApp
- **Endpoints**:
  - POST /whatsapp/send-template: Envia mensagem usando template
  - POST /whatsapp/webhook: Recebe atualizações de status
- **Documentação Swagger**:
  - Descrições detalhadas dos endpoints
  - Exemplos de requisições e respostas
  - Códigos de status HTTP

#### whatsapp.service.ts
- **Descrição**: Serviço do módulo WhatsApp
- **Função**: Implementa a lógica de integração com Twilio
- **Funcionalidades**:
  - Inicialização do cliente Twilio
  - Validação de variáveis de ambiente
  - Envio de mensagens via template
  - Processamento de webhooks
- **Métodos**:
  - sendTemplateMessage(): Envia mensagem usando template
  - handleWebhook(): Processa atualizações de status
  - validateEnvironmentVariables(): Valida configurações
  - initializeTwilioClient(): Inicializa cliente Twilio

### DTOs (Data Transfer Objects)

#### webhook-request.dto.ts
- **Descrição**: DTO para requisições de webhook
- **Função**: Define a estrutura dos dados recebidos do Twilio
- **Propriedades**:
  - MessageSid: ID único da mensagem
  - MessageStatus: Status atual da mensagem
  - To: Número do destinatário
  - From: Número do remetente
  - AccountSid: ID da conta Twilio

#### whatsapp-response.dto.ts
- **Descrição**: DTOs para respostas da API
- **Função**: Define estruturas de sucesso e erro
- **Classes**:
  - WhatsappSuccessResponseDto:
    - success: boolean
    - messageId: string
  - WhatsappErrorResponseDto:
    - success: boolean
    - error: string
