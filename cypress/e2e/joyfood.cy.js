describe('Joyfood', () => {
  it('passes', () => {
    cy.visit('https://www.joyfood.it/home')
  })
})

describe('Joyfood B2b', () => {
  it('passes', () => {
    cy.visit('https://b2b.joyfood.it/home')
  })
  
})


describe('Joyfood Bosch', () => {
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
    cy.url().should('include', '/offerta/-/Ri/211#!')
    cy.get('.msg-session').first().should('contain', 'Stai prenotando per  Utente Bosch - Matricola 999999999');
    cy.get('.btn-success.btn-register').first().should('contain','Invia Prenotazione');
    cy.get('.btn-success.btn-register').eq(1).should('contain','Esci Senza Inviare'); 
  })
  it('logout', () => {
    cy.visit('https://www.joyfood.it/bosch-tablet?fgc0PW4xqUmNdctPRjGQ#!');
    cy.get('#_internaluserlogin_WAR_elioruserportlet_badge').type('999999999');
    cy.contains('Prenota').click();
    cy.url().should('include', '/offerta/-/Ri/211#!')
    cy.contains('Esci Senza Inviare').click();
    cy.url().should('include', '/home?fgc0PW4xqUmNdctPRjGQ#!')
  })
 
})

