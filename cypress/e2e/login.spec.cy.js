import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import MyAccountPage from '../pages/myAccountPage.js'
import RegisterPage from '../pages/registerPage.js'

const loginPage = new LoginPage()
const myAccountPage = new MyAccountPage()
const registerPage = new RegisterPage()


describe('Fluxo de Cadastro e Login', () => {

  beforeEach(() => {
    cy.visit('https://automationpratice.com.br/')
  });

  context('Cenário 1 - Cadastro bem-sucedido', () => {
    it('Deve permitir cadastro com dados válidos', () => {
      loginPage.accessLoginPage();
      loginPage.loginWithAnyUser(userData.userSuccess.email, userData.userSuccess.senha);
      loginPage.checkSuccessLogin();
    });
  });

  context('Cenário 2 - Logout da conta da loja', () => {
    it('Deve permitir logout e redirecionar para tela de login', () => {
      loginPage.accessLoginPage();
      loginPage.loginWithAnyUser(userData.userSuccess.email, userData.userSuccess.senha);
      loginPage.checkSuccessLogin();
      myAccountPage.logoutAccount();
    });
  });

  context('Cenário 3 - Tentativa de cadastro com campos obrigatórios vazios', () => {
    it('Deve exibir mensagens de erro ao tentar cadastrar sem preencher campos', () => {
      loginPage.accessLoginPage();
      registerPage.accessRegisterPage();
      registerPage.registerNewUser('Teste 123', ' ', 'Senha123');
      registerPage.checkEmptyUserField();
    });
  });

    context('Cenário 4 - Cadastro com campo vazio', () => {
    it('Deve informar mensagem de erro nos campos obrigatórios inválidos', () => {
      loginPage.accessLoginPage();
      loginPage.loginWithAnyUser('arroz', 'feijao');
      cy.get('.invalid_input').contains('E-mail inválido.');
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.log(`Teste falhou: ${this.currentTest.title}`)
      cy.screenshot(`falha-${this.currentTest.title}`)
    }
  });
});