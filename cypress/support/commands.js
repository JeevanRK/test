Cypress.Commands.add("searchKeyword", function(){
    cy.get('input[type="text"]').type('The Test Tribe')
})