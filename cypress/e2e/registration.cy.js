
describe('Patient Registration', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('able to register users', () => {
    cy.login('Superadmin@candelatech.in','secret123')
    cy.get('button#register').click()
    cy.get('.ca-mainheader').should('contain', 'Book Appointments')
    cy.get('label[for="name"]').click()
    cy.get('input#name').type('Test Patient')
    cy.get('span').contains('Male').click()
    cy.get('input#phone').type('9876543210')
    cy.get('input.book-sumbit').click()
  })
})