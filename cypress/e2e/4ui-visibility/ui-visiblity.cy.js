describe('UI Component Visibility', () => {
    it('Should display the main navigation bar', () => {
        cy.visit('https://www.bstackdemo.com'); // Visit the page
        cy.get('.Navbar_root__2kbI9 > .mx-auto > .justify-between').should('be.visible'); // Check visibility
    });

    it('Should display footer', () => {
        cy.visit('https://www.bstackdemo.com'); // Visit the page
        cy.get('.py-12').should('be.visible'); // Check visibility
    });

    it('Should display main content area', () => {
        cy.visit('https://www.bstackdemo.com'); // Visit the page
        cy.get('main').should('be.visible'); // Check visibility
    });
});
