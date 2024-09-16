describe('Form Validation Edge Cases', () => {
    beforeEach(() => {
      // Visit the form page before each test
      cy.visit('/signin')
    });
  
    it('Should show an error message for empty required fields', () => {
            cy.get('#login-btn').click()
      cy.get('.api-error').should('contain.text', 'Invalid Username');
    });
  
    it('Should show an error message for invalid email format', () => {
      cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('invalid-email');
      cy.get('#login-btn').click();
      cy.get('.api-error').should('contain.text', 'Invalid Username');
    });
  
    it('Should show an error message for short password', () => {
      cy.get('#password > .css-yk16xz-control > .css-1hwfws3').type('short{enter}');
      cy.get('#login-btn').click();
      cy.get('.api-error').should('contain.text', 'Invalid Username');
    });
  
    it('Lock the user due to invalid data ', () => {
      cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('locked_user{enter}');
      cy.get('#login-btn').click();
      // Verify that form submission is prevented
      cy.url().should('eq', Cypress.config().baseUrl + '/signin');
    });
  });
  