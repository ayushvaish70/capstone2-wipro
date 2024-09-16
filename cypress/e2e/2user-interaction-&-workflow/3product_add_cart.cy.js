describe('Product Sort', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('/')
    });
    context('Product add to cart', () => {

        // Test case to add products into cart
        it('Should add products into cart according to selection', () => {
            cy.contains('Add to cart').click()
            cy.contains('Add to cart').click()

            // Assertions to verify selected products are added to cart
            cy.get('.shelf-item__details > .title').should('contain', 'iPhone')
            cy.get('.desc')
                .should('contain', 'Apple')
                .should('contain', 'Quantity: 2')

        })
    })

})
