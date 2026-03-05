
---

# 📌 Desafio Multiplier - Automação com Cypress

Este repositório contém a automação desenvolvida para o **desafio da empresa Multiplier**, utilizando a plataforma de e-commerce da **QAzando**.  
O projeto foi estruturado com **Page Objects** e **Fixtures**, garantindo maior organização, reutilização e clareza no código.

---

## 🚀 Tecnologias utilizadas
- **[Cypress](https://www.cypress.io/)** → Framework de testes end-to-end
- **JavaScript (ES6+)**
- **Node.js**
- **Page Objects** → Separação da lógica de interação com elementos
- **Fixtures** → Dados externos para simulação de cenários

---

## 📂 Estrutura do projeto
```
Desafio_Multiplier/
│── cypress/
│   ├── e2e/              # Casos de teste
│   ├── fixtures/         # Massa de dados (JSON)
│   ├── pageObjects/      # Classes e métodos reutilizáveis
│   └── support/          # Configurações e comandos customizados
│── cypress.config.js     # Configuração principal do Cypress
│── package.json          # Dependências e scripts
```

---

## ⚙️ Instalação e execução
1. Clone o repositório:
   ```bash
   git clone https://github.com/ldelgado02/Desafio_Multiplier.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute os testes:
   - Modo interativo:
     ```bash
     npx cypress open
     ```
   - Modo headless:
     ```bash
     npx cypress run
     ```

---

## 🧩 Conceitos aplicados
- **Page Objects**: Cada página possui uma classe com métodos que encapsulam ações e seletores, evitando duplicação de código.  
- **Fixtures**: Arquivos JSON armazenam dados de entrada, permitindo simulação de diferentes cenários sem alterar o código dos testes.  
- **Reutilização**: O uso combinado de Page Objects e Fixtures facilita manutenção e escalabilidade dos testes.

---

## 📌 Objetivo
O projeto demonstra boas práticas de automação de testes, com foco em:
- **Organização** do código  
- **Reutilização** de componentes  
- **Facilidade de manutenção**  
- **Escalabilidade** para novos cenários  

---
