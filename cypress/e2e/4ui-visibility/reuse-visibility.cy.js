describe('UI Component Visibility', () => {
    it('Should display the main navigation bar', () => {
        cy.visit('https://www.bstackdemo.com');
        cy.checkVisibility('.Navbar_root__2kbI9 > .mx-auto > .justify-between');
    });

    it('Should display footer', () => {
        cy.visit('https://www.bstackdemo.com');
        cy.checkVisibility('.py-12');
    });

    it('Should display main content area', () => {
        cy.visit('https://www.bstackdemo.com');
        cy.checkVisibility('main');
    });
});
