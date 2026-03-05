import userData from '../fixtures/userData.json'

describe('Fluxo de Cadastro e Login', () => {

  beforeEach(() => {
    cy.visit('https://automationpratice.com.br/');
  });

  context('Cenário 1 - Cadastro bem-sucedido', () => {
    it('Deve permitir cadastro com dados válidos', () => {
      // acessa página de login
      cy.get('.right_list_fix > :nth-child(1) > a').click()
      cy.url().should('contains', '/login')
      cy.get('#user').type(userData.userSucess.email)
      cy.get('#password').type(userData.userSucess.senha)
      cy.get('#btnLogin').click()
      cy.url().should('contains', '/my-account')
      cy.get('.swal2-success-ring').should('be.visible')
      cy.get('.swal2-confirm').click()



    });
  });

  context('Cenário 2 - Logout da conta da loja', () => {
    it.only('Deve permitir logout e redirecionar para tela de login', () => {
      cy.get('.right_list_fix > :nth-child(1) > a').click()
      cy.url().should('contains', '/login')
      cy.get('#user').type(userData.userSucess.email)
      cy.get('#password').type(userData.userSucess.senha)
      cy.get('#btnLogin').click()
      cy.url().should('contains', '/my-account')
      cy.get('.swal2-success-ring').should('be.visible')
      cy.get('.swal2-confirm').click()

      //o "force: true", foi utilizado mesmo não sendo uma boa prática em testes, pois a lista com o elemento de logout não fica visível para o cypress. 
      // Sem o force: true, o teste retorna erro "is not visible because it has CSS property: visibility: hidden"
      cy.get('ul.custom_dropdown li a').contains('Logout').click({ force: true })

      cy.url().should('include', '/login')
      cy.get('.swal2-success-circular-line-left').should('be.visible')


    });
  });

  context('Cenário 3 - Tentativa de cadastro com campos obrigatórios vazios', () => {
    it('Deve exibir mensagens de erro ao tentar cadastrar sem preencher campos', () => {
      cy.get('.right_list_fix > :nth-child(1) > a').click()
      cy.url().should('contains', '/login')
      cy.get('#createAccount').click()
      cy.url().should('contains', '')
      cy.get('#user').type('Teste 123')
      cy.get('#email').type('Teste@gmail.com').clear()
      cy.get('#password').type('Senha123')
      cy.get('#btnRegister').click()
      cy.get('#errorMessageFirstName').contains('O campo e-mail deve ser prenchido corretamente')

    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.log(`Teste falhou: ${this.currentTest.title}`)
      cy.screenshot(`falha-${this.currentTest.title}`)
    }
  });
});