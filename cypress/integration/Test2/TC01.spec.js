describe("Search in Google",function(){
    it("Search a keyword in Google Site", function(){
        cy.visit('https://www.google.com/');
        cy.title().should('eq','Google');
        cy.get('input[type="text"]').type('The Test Tribe')
        cy.get('input[type="submit"]').contains('Google Search').click();
        cy.title().should('eq','The Test Tribe - Google Search')

    })
})