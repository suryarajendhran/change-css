/* eslint-disable no-undef */

describe('My First Test', () => {
  it('Server is up!', () => {
    cy.visit('/');
  });
  it('Color is set to grey', () => {
    cy.get('#app').should('have.css', 'color', 'rgb(128, 128, 128)');
  });
  it('Font is set to Helvetica', () => {
    cy.get('#app').should('have.css', 'font-family', 'Helvetica');
  });
  it('Background is set to rgb(200, 200, 200)', () => {
    cy.get('#app').should('have.css', 'background-color', 'rgb(230, 230, 230)');
  });
});
