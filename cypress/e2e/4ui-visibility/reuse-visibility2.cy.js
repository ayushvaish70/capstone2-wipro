describe('Add Products to Cart', () => {
    it('Should add iPhone 12 Mini to cart and verify', () => {
        cy.visit('https://www.bstackdemo.com'); // Visit the page

        // Add iPhone 12 Mini to cart
        cy.addProductToCart('iPhone 12 Mini');

        // Debugging: Log the content of the .desc element
        cy.get('.desc').then($desc => {
            cy.log($desc.text()); // Log the text content of the element for debugging
        });

        // Assertions to verify product is added to cart
        cy.get('.shelf-item__details > .title').should('contain', 'iPhone 12 Mini');

        // Adjusting assertions based on the actual structure
        cy.get('.shelf-item__details > .title').should('contain', 'iPhone 12 Mini'); // Ensure product name is in .desc
        cy.get('.desc').should('contain', 'Quantity: 1');  // Ensure correct quantity
    });
});
