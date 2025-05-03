describe("Formulaire de Contact", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/contact") // Remplacez par l'URL de votre application
        })
    it("Le formulaire doit être rempli et envoyé", () => {
        cy.get('#field-testid').type("toto") 
        cy.contains("Envoyer").click()
        cy.get('success').should('be.visible').should('contain', 'Message envoyé !')
    })
})