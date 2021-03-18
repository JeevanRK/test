describe("Search in Google",function(){
    before(()=>{
        cy.fixture('/example.json').as('testData')
        cy.visit('/');
    })

    it("Search a keyword in Google Site", function(){       
        cy.title().should('eq',this.testData.title);  
         
    })

    it("verify the landing page", function(){
        cy.searchKeyword();
        cy.get('input[type="submit"]').contains('Google Search').click();
        cy.title().should('eq','The Test Tribe - Google Search')
    })
})