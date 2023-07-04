describe("Example to demonstrate dealing with dropdown in cypress",()=>{

    it('handle dropdowm with cypress example 1',()=>{

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('Python')  //we can use select function to select option from dropdown
        cy.get('#dropdowm-menu-2').select('Maven')
        cy.get('#dropdowm-menu-3').select('JQuery')
    })


    it('handle dropdowm with cypress example 2',()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        cy.get('.custom-select').should('be.visible')
        cy.get('.custom-select').select('Spain')        
    })


})