describe('Test simples', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('Error en el hotel seleccionado', () => {
        cy.get('#hotelId').select('')
        cy.get('#checkIn').type("2020-02-11")
        cy.get('#numNights').type("2")
        cy.get('#searchButton').click()
        cy.wait(1000)
        cy.get('.card').should('not.exist')
        cy.get('#error-1').should('exist')
    })
    it('Error la fecha introducida', () => {
        cy.get('#hotelId').select('Hotel Moderno')
        cy.get('#checkIn').type("2020-02-02")
        cy.get('#numNights').type("2")
        cy.get('#searchButton').click()
        cy.wait(1000)
        cy.get('.card').should('not.exist')
        cy.get('#error-2').should('exist')
    })
    it('Error en el número de noches seleccionado', () => {
        cy.get('#hotelId').select('Hotel Moderno')
        cy.get('#checkIn').type("2020-02-11")
        cy.get('#numNights').type("31")
        cy.get('#searchButton').click()
        cy.wait(1000)
        cy.get('.card').should('not.exist')
        cy.get('#error-3').should('exist')
    })
    it('Debe buscar correctamente', () => {
        cy.get('#hotelId').select('Hotel Moderno')
        cy.get('#checkIn').type("2020-02-11")
        cy.get('#numNights').type("2")
        cy.get('#searchButton').click()
        cy.wait(5000)
        cy.get('.card').should('exist')
    })
})