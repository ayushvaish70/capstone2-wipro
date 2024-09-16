// describe('Product Sort', () => {
//     beforeEach(() => {
//         // Visit the homepage before each test
//         cy.visit('/')
//     });
//     context('Product sorting by price', () => {

//         // Test case for sorting products by rating in descending order
//         it('Should sort products by price : Highest to Lowest', () => {
//             cy.get('select')
//                 .select('Highest to lowest')
//                 .should('have.value', 'highestprice')

//             cy.get('.shelf-item__price').then($prices => {
//                 let i = 0
//                 const currentPrice = parseFloat($prices.eq(i).text().replace('$', '').replace(',', ''));
//                 const nextPrice = parseFloat($prices.eq(i + 1).text().replace('$', '').replace(',', ''));
//                 expect(currentPrice > nextPrice || currentPrice === nextPrice).to.be.true

//             })
//         })

//         // Test case for sorting products by rating in ascending order
//         it('Should sort products by price : Lowest to Highest', () => {
//             cy.get('select')
//                 .select('Lowest to highest')
//                 .should('have.value', 'lowestprice')
//             cy.get('.shelf-item__price').then($prices => {
//                 let i = 0
//                 const currentPrice = parseFloat($prices.eq(i).text().replace('$', '').replace(',', ''));
//                 const nextPrice = parseFloat($prices.eq(i + 1).text().replace('$', '').replace(',', ''));
//                 expect(currentPrice < nextPrice || currentPrice === nextPrice).to.be.true
//             })
//         })
//     })
// })