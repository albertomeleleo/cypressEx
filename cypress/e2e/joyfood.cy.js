describe('Visit Joyfood', () => {
  it('passes', () => {
    cy.visit('https://www.joyfood.it/home')
  })
})

describe('Visit Joyfood B2b', () => {
  it('passes', () => {
    cy.visit('https://b2b.joyfood.it/home')
  })
})


describe('Visit Joyfood Bosch', () => {
  it('visit', () => {
    cy.visit('https://www.joyfood.it/bosch-tablet?fgc0PW4xqUmNdctPRjGQ#!');
  })
  it('login', () => {
    cy.visit('https://www.joyfood.it/bosch-tablet?fgc0PW4xqUmNdctPRjGQ#!');
    cy.get('#_internaluserlogin_WAR_elioruserportlet_badge').type('999999999');
    cy.contains('Prenota').click();
    cy.url().should('include', '/offerta/-/Ri/211#!')
  })
  it('check data', () => {
    cy.visit('https://www.joyfood.it/bosch-tablet?fgc0PW4xqUmNdctPRjGQ#!');
    cy.get('#_internaluserlogin_WAR_elioruserportlet_badge').type('999999999');
    cy.contains('Prenota').click();
    cy.contains('Stai prenotando per  Utente Bosch - Matricola 999999999');
    cy.contains('Invia Prenotazione');
    cy.contains('Esci Senza Inviare');
  })
  it('logout', () => {
    cy.visit('https://www.joyfood.it/bosch-tablet?fgc0PW4xqUmNdctPRjGQ#!');
    cy.get('#_internaluserlogin_WAR_elioruserportlet_badge').type('999999999');
    cy.contains('Prenota').click();
    cy.contains('Esci Senza Inviare').click();
    cy.url().should('include', '/home?fgc0PW4xqUmNdctPRjGQ#!')
  })
 
})

