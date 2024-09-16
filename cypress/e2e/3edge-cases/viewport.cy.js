describe('Responsive Design Tests', () => {
    const viewports = [
        { name: 'Mobile', width: 375, height: 667 },
        { name: 'Tablet', width: 768, height: 1024 },
        { name: 'Desktop', width: 1280, height: 800 }
    ];

    viewports.forEach(({ name, width, height }) => {
        it(`Should display correctly on ${name}`, () => {
            cy.viewport(width, height);
            cy.visit('https://www.bstackdemo.com');
            // Verify core UI elements are visible
            cy.get('.Navbar_root__2kbI9 > .mx-auto > .justify-between').should('be.visible');
            cy.get('.py-12').should('be.visible');
        });
    });
});
