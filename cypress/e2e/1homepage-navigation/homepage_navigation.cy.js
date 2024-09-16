describe('Homepage Navigation', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/')
  });
  context('Positive Cases', () => {

    it('Should load the homepage successfully', () => {

      // Verify that the correct URL is loaded
      cy.url().should('eq', Cypress.config().baseUrl + '/')
      cy.get('body').should('be.visible');
      
    })
    it('Should verify homepage header contents', () => {
      // Verify that the header container is visible
      cy.get('.Navbar_root__2kbI9 > .mx-auto > .justify-between')
        .should('be.visible');
      
      // Verify that the 'Offers' section is present and has strong text
      cy.get('#offers > strong')
        .should('be.visible')
        .and('contain.text', 'Offers');

      // Verify that the 'Orders' section is present and has strong text
      cy.get('#orders > strong')
        .should('be.visible')
        .and('contain.text', 'Orders');

      // Verify that the 'Favourites' section is present and has strong text
      cy.get('#favourites > strong')
        .should('be.visible')
        .and('contain.text', 'Favourites');
    });

    it('Should redirect to login page when user clicks on any of nav items', () => {

      // Click on the Offer link
      cy.get('nav').eq(0).contains('Offers').click()

      // Verify that the URL changes to the login page
      cy.url().should('include', '/signin?offers=true')

      // Navigate back to the homepage
      cy.go('back');

      
      // Click on the Order link
      cy.get('nav').contains('Orders').click()

      // Verify that the URL changes to the login page
      cy.url().should('include', '/signin?orders=true')

      // Navigate back to the homepage
      cy.go('back')

      // Click on the Favorite link
      cy.get('nav').contains('Favourites').click()

      // Verify that the URL changes to the login page
      cy.url().should('include', '/signin?favourites=true')
      cy.go('back')
      
    })
  })
})