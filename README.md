# 📱 App React Native - Consulta Contextual LLM

Este é um aplicativo mobile feito com **React Native e Expo**, que permite ao usuário consultar um modelo de linguagem (LLM) de forma contextualizada.

## 🚀 Como rodar

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o servidor Expo

```bash
npx expo start
```

Escaneie o QR code com o app **Expo Go** no seu celular.

## ⚙️ Configuração do backend

O app faz requisições ao backend em Node.js. No arquivo `App.js`, atualize o endereço da API com o IP da sua máquina local:

```js
http://192.168.X.X:3000/api/perguntar
```

> ⚠️ Não use `localhost` ou `127.0.0.1`, pois o celular não reconhecerá.

## 📱 Funcionalidades

- Entrada de **contexto**
- Entrada da **pergunta**
- Botão para consultar
- Exibição da **resposta gerada** pela IA

## 📚 Tecnologias usadas

- React Native
- Expo
- Axios

## 📸 Interface

Tela com campos de texto e botão para envio, estilizada com `StyleSheet` nativo.
