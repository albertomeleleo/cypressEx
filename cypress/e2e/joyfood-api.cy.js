describe('Joyfood planning', () => {
  it("gets a list of hubs", () => {
    cy.request("GET", "https://www.joyfood.it/services/hub/getList").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.hubsListDTO).length.to.be.greaterThan(1)
    })
  })

})
