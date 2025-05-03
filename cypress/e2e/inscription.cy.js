describe('inscription evenement', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/"); 

  })

  it("test formulaire d'inscription", () => {
    
    cy.visit("http://localhost:3000/event/6813201a6931264829358ab7/");
  //cy.contains('.inputField', 'field-name')
  cy.get(':nth-child(1) > [data-testid="field-testid"]').type('Toto'); // Name field
  cy.get(':nth-child(2) > [data-testid="field-testid"]').type('Martin')// Name field
  cy.get(':nth-child(4) > [data-testid="field-testid"]').type('mamatoto@aol.com')

  cy.get('.col > [data-testid="button-test-id"]').click(); // Submit the form
  
  
  //cy.get('.col > [data-testid="button-test-id"]').should('be.visible').and('be.enabled').click();
  
  

});
})