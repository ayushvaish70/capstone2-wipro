// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('getByData', (selector) => {
    return cy.get(`[data-test=${selector}]`)
})
// In your cypress/support/commands.js file

Cypress.Commands.add('checkVisibility', (selector) => {
    cy.get(selector).should('be.visible');
});

// In your cypress/support/commands.js file

Cypress.Commands.add('addProductToCart', (productName) => {
    cy.contains(productName).parent().within(() => {
        cy.get('[class*="shelf-item__buy-btn"]').click(); // Adjust to find the 'Add to Cart' button
    });
});



// In your cypress/support/commands.js file

Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, address, province, postCode) => {
    cy.get('#firstNameInput').type(firstName);
    cy.get('#lastNameInput').type(lastName);
    cy.get('#addressLine1Input').type(address);
    cy.get('#provinceInput').type(province);
    cy.get('#postCodeInput').type(postCode);
    cy.get('#checkout-shipping-continue').click();
});
