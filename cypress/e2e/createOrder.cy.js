/**
 * This test suite is to validate E2E scenario in desktop view:
 */
describe("create order end to end scenario",()=> {
    beforeEach("login",()=> {
        cy.loginWithValidCredentials()
    })
    
    /**
     * End To End Scenario: Placed Order
     */
    it("create order",()=> {
        cy.selectProductToBuy()
        cy.placeOrder()
        cy.fillAllDetailsToProcessedPaymentPage()
        cy.fillPaymentDetailsAndCompletePayment()
    })
})

/**
 * This test suite is to validate E2E scenario in mobile view:
 */
describe("create order end to end scenario for mobile view",()=> {
    beforeEach("login",()=> {
        cy.loginWithValidCredentials()
        cy.viewport("iphone-6+")
    })

    /**
     * End To End Scenario: Placed Order
     */
    it("create order",()=> {
        cy.selectProductToBuy()
        cy.placeOrder()
        cy.fillAllDetailsToProcessedPaymentPage()
        cy.fillPaymentDetailsAndCompletePayment()
    })
})