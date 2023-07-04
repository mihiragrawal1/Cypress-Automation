describe("Example to demonstrate dealing with checkboxes in cypress",()=>{

    it('handle checkboxes with cypress',()=>{

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        
        cy.get(':nth-child(7) > input').check()   //we can select a checkbox using check()
        cy.get(':nth-child(5) > input').uncheck()      //we can unselect a checkbox using uncheck()
    })

    it('handle checkboxes with cypress example 2',()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        
        cy.get('#wednesday').check()           //we can select a checkbox using check()
        cy.get('#saturday').check()
        cy.get('#monday').check()
        cy.get('#saturday').uncheck()      //we can unselect a checkbox using uncheck()
    })
})