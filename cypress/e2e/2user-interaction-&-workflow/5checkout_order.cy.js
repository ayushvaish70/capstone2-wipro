describe('Product Sort', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('/')
    });
    context('Product checkout after User authentication', () => {
        it('Should add products into cart and checkout after authentication', () => {

            // Test case to add product into cart
            cy.contains('Add to cart').click()
            cy.contains('Add to cart').click()

            // Assertions to verify selected products are added to cart
            cy.get('.shelf-item__details > .title').should('contain', 'iPhone')
            cy.get('.desc')
                .should('contain', 'Apple')
                .should('contain', 'Quantity: 2')
            cy.get('.buy-btn').click()

            // Test steps to login with valid credentials before checkout

            cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('demouser{enter}')
            cy.get('#password > .css-yk16xz-control > .css-1hwfws3')
                .click()
                .type('testingisfun99{enter}')
            cy.get('#login-btn').click()

            // Assertions to verify checkout URL after successful Login
            cy.url().should('eq', 'https://www.bstackdemo.com/checkout')

            //Test Case to add details into checkout form
            cy.get('#firstNameInput').type('Noor Ismot')
            cy.get('#lastNameInput').type('Ara')
            cy.get('#addressLine1Input').type('Sweden')
            cy.get('#provinceInput').type('Gothenburg')
            cy.get('#postCodeInput').type('45151')
            cy.wait(2000)
            cy.get('#checkout-shipping-continue').click()

            // Assertions to verify checkout successful
            cy.url().should('eq', 'https://www.bstackdemo.com/confirmation')

            //Custom command to verify the success message
            cy.getByData('shipping-address-heading').should('exist').contains('Your Order has been successfully placed')

            //Test Cases to View orders
            cy.get('.checkoutHeader-link').click()
            cy.get('#orders').click()

            //Assertions to view Oder 
            cy.url().should('eq', 'https://www.bstackdemo.com/orders')
            cy.get('.a-color-offset-background > .a-box-inner')
                .should('contain', 'Order placed')
                .should('not.contain', 'No orders found')

        })
    })

})
