describe('Testes de API', () => {
    const endpointUrl = 'https://petstore.swagger.io/v2/pet/findByStatus'
  
    it('Validar o status da resposta para status "available"', () => {
      cy.request({
        method: 'GET',
        url: endpointUrl,
        headers: {
          accept: 'application/json',
        },
        qs: {
          status: 'available',
        },
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  
    it('Validar o status da resposta para status "pending"', () => {
      cy.request({
        method: 'GET',
        url: endpointUrl,
        headers: {
          accept: 'application/json',
        },
        qs: {
          status: 'pending',
        },
      }).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("test")
      })
    })
  
    it('Validar o status da resposta para status  "sold"', () => {
      cy.request({
        method: 'GET',
        url: endpointUrl,
        headers: {
          accept: 'application/json',
        },
        qs: {
          status: 'sold',
        },
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  
    it('Validar o status da resposta para status inválido', () => {
      cy.request({
        method: 'GET',
        url: endpointUrl,
        headers: {
          accept: 'application/json',
        },
        qs: {
          status: 'invalid_status',
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
      it('Validar a propriedade "name" dos pets retornados', () => {
        cy.request({
          method: 'GET',
          url: 'https://petstore.swagger.io/v2/pet/findByStatus',
          headers: {
            accept: 'application/json',
          },
          qs: {
            status: 'available',
          },
        }).then((response) => {
        //   response.body.forEach((pet) => {
        //     expect(pet.name).to.not.be.null
        //     expect(pet.name).to.be.a('string')
        // })

        cy.wrap(response.body[0]).should((pet) => {
            expect(pet.name).to.exist
            expect(pet.name).to.be.a('string')
            expect(pet.name).to.have.length.greaterThan(0)
          })


    })
  })
})