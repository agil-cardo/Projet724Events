   
    describe('Message trop long', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/"); 
    });

    it("test formulaire de contact", () => {

          
            cy.get(':nth-child(1) > :nth-child(1) > [data-testid="field-testid"]').type('Pierre'); 
            cy.get(':nth-child(2) > [data-testid="field-testid"]').type('Delaforet')// Name field
            cy.get(':nth-child(4) > [data-testid="field-testid"]').type('pepito@aol.com')
            cy.get(':nth-child(2) > .inputField > [data-testid="field-testid"]').type('je voudrais organiser une conference'); // Message field

            // Submit the form
            cy.get('.row > :nth-child(1) > [data-testid="button-test-id"]').click();


            cy.get('Thank you for your message!').should('exist');         
        });
    })
