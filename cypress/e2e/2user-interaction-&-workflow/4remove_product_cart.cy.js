describe('Product Sort', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('/')
    })

    context('Remove product from Cart', () => {

        it('Should remove products from cart', () => {

            // Test case to add product from cart
            cy.contains('Add to cart').click()

            // Assertions to verify selected products are added to cart
            cy.get('.bag__quantity').should('have.text', '1')
            cy.get('.desc')
                .should('contain', 'Quantity: 1')

            // Test case to remove product from cart
            cy.get('.shelf-item__del').click()

            // Assertions to verify selected products are removed from cart
            cy.get('.bag__quantity').should('have.text', '0')

        })
    })

})
