describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
  it('Visits the Dashboard', () => {
    cy.visit('https://dash.flaat.io')
    cy.get('h5').should('to.contain', 'Canada COVID 19')
  })
})
