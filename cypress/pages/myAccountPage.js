class MyAccountPage {
    selectorList() {
        const selectors = {
            logoutButton: '.nav > :nth-child(6) > a',
            logoutSuccessAlert: '.swal2-success-circular-line-left'
        }

        return selectors
    }

    logoutAccount() {
        cy.get(this.selectorList().logoutButton).click()
        cy.url().should('include', '/login')
        cy.get(this.selectorList().logoutSuccessAlert).should('be.visible')
    }
}

export default MyAccountPage;