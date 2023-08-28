describe('The Login Page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('successfully logs in', () => {
    cy.url().should('eq', 'https://demohms.candelatech.in/login')
    cy.get('img.mainlogo').should('exist')
    cy.get('input#email').type('Superadmin@candelatech.in')
    cy.get('input#password').type('secret123')
    cy.get('button.submit').click()
    cy.get('.ca-mainheader').should('contain', 'Good Day, Admin')
  })

  it('does not login for invalid user', () => {
    cy.url().should('eq', 'https://demohms.candelatech.in/login')
    cy.get('img.mainlogo').should('exist')
    cy.get('input#email').type('Superadmin@candelatech')
    cy.get('input#password').type('secret123')
    cy.get('button.submit').click()
    cy.url().should('eq', 'https://demohms.candelatech.in/login?error')
    cy.get('form.form-dialog').should('be.visible')
  })

  it('does not login for no user creds', () => {
    cy.url().should('eq', 'https://demohms.candelatech.in/login')
    cy.get('img.mainlogo').should('exist')
    cy.get('button.submit').click()
    cy.url().should('eq', 'https://demohms.candelatech.in/login?error')
    cy.get('form.form-dialog').should('be.visible')
  })

  it('does not login for wrong password', () => {
    cy.url().should('eq', 'https://demohms.candelatech.in/login')
    cy.get('img.mainlogo').should('exist')
    cy.get('input#email').type('Superadmin@candelatech')
    cy.get('input#password').type('secret')
    cy.get('button.submit').click()
    cy.url().should('eq', 'https://demohms.candelatech.in/login?error')
    cy.get('form.form-dialog').should('be.visible')
  })
})