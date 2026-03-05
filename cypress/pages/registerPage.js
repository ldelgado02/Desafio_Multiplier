class RegisterPage {
    selectorsList() {
        const selectors = {

            loginPageButton: '.right_list_fix > :nth-child(1) > a',
            registerPageButton: '#createAccount',
            userField: '#user',
            emailField: '#email',
            passwordField: '#password',
            registerButton: '#btnRegister',
            emptyUserFieldAlert: '#errorMessageFirstName'

        }

        return selectors
    }

    accessRegisterPage() {
        
        cy.get(this.selectorsList().registerPageButton).click()
        cy.url().should('contains', '/register')
    }

    registerNewUser(user, email, password) {
        cy.get(this.selectorsList().userField).type(user)
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().registerButton).click()
    }

    checkEmptyUserField() {
        cy.get(this.selectorsList().emptyUserFieldAlert).contains('O campo e-mail deve ser prenchido corretamente')
    }

}

export default RegisterPage;