// describe('Product Sort', () => {
//     beforeEach(() => {
//         // Visit the homepage before each test
//         cy.visit('/')
//     });
//     context('Product filter by brand tag', () => {

//         // Test case for filter products by selected brand tag (Apple)
//         it('Should filter products according to selected brand', () => {
//             cy.get(':nth-child(2) > label > .checkmark')
//                 .click()
//                 .should('have.text', 'Apple') //Verify the selected tag

//             // Assertions to verify products are filtered and displayed correctly based on the selected brand (Apple)
//             cy.get('.shelf-item__title')
//                 .should('not.contain', 'Galaxy')
//                 .should('not.contain', 'One Plus')
//                 .should('not.contain', 'Pixel')
//                 .should('contain', 'iPhone')

//         })
//     })

// })
