describe('User Login & Logout', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('/')
        cy.wait(1000)
    })
    context('Positive Cases', () => {
        it('Should allow a registered user to login and logout successfully', () => {

            // Test steps to login with valid credentials
            cy.get('#signin').click()
            cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('demouser{enter}')
            cy.get('#password > .css-yk16xz-control > .css-1hwfws3')
                .click()
                .type('testingisfun99{enter}')
            cy.get('#login-btn').click()

            // Assertions to verify successful login
            cy.url().should('include', '/?signin=true')
            cy.get('.username').should('have.text', 'demouser')
            cy.get('#logout').should('be.visible')

            // Test steps to logout
            cy.get('#logout').click()

            // Assertions using location command to verify successful logout
            cy.location('pathname').should('eq', '/')

            //cy.url().should('eq', 'https://www.bstackdemo.com/')

            cy.get('#signin').should('have.text', 'Sign In')

        })
    })

    context('Negative Cases', () => {
        it('Should display an error message for incorrect username', () => {

            // Test steps to login with incorrect username
            cy.get('#signin').click()
            cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('testuser{enter}')
            cy.get('#password > .css-yk16xz-control > .css-1hwfws3')
                .click()
                .type('testingisfun99{enter}')
            cy.get('#login-btn').click()

            // Assertion to verify error message for Invalid Username
            cy.get('.api-error').should('have.text', 'Invalid Username')
        })

        it('Should display an error message for incorrect password', () => {

            // Test steps to login with incorrect password
            cy.get('#signin').click()
            cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('demouser{enter}')
            cy.get('#password > .css-yk16xz-control > .css-1hwfws3')
                .click()
                .type('invalidpass00{enter}')
            cy.get('#login-btn').click()

            //Assertion to verify error message for Invalid Password
            cy.get('.api-error').should('have.text', 'Invalid Password')
            cy.go('back')
        })

    })
})