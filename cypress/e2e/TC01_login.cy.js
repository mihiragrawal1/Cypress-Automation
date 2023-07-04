describe("Login page test",()=>{

    it("Login page",()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/") //visit website url
        cy.url().should('eq','https://practicetestautomation.com/practice-test-login/')    //verify visit
        cy.get('#username').type('student')   //enter username
        cy.get('#password').type('Password123')   //enter password
        cy.get('#submit').click()    //click submit button
        cy.wait(2000)    //wait 2 sec to get logged in
        cy.url().should('eq','https://practicetestautomation.com/logged-in-successfully/')   //verify after success url
        cy.get('.wp-block-button__link').should('be.visible')    //validate logout button visibility
    })
})