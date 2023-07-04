describe("Example to demonstrate dealing with radiobuttons in cypress",()=>{

    it('handle radiobuttons with cypress',()=>{

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="yellow"]').check()

    })

    it('handle radiobuttons with cypress example 2',()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('#male').check()
        
    })

})