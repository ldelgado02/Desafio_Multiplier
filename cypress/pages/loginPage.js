class LoginPage {
    selectorsList() {
        const selectors = {
            loginPageButton: '.right_list_fix > :nth-child(1) > a',
            userField: '#user',
            passwordField: '#password',
            loginButton: '#btnLogin',
            loginSuccessAlert: '.swal2-success-ring',
            loginFailAlert: '.invalid_input',
            wrongEmailAlert: '.invalid_input'

        }

        return selectors
    }
    
    accessLoginPage() {
        cy.get(this.selectorsList().loginPageButton).click()
        cy.url().should('contains', '/login')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().userField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()

    }

    checkSuccessLogin() {
        cy.url().should('contains', '/my-account')
        cy.get(this.selectorsList().loginSuccessAlert).should('be.visible')

        //botão para fechar informativo de login com sucesso
        cy.get('.swal2-confirm').click()
    }



}

export default LoginPage;