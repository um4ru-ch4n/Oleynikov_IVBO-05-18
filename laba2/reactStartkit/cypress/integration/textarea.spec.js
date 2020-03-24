describe('The Home Page', function() {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Textarea test 1', function() {
      const typedText = "qwer qwer. qewr qwer qwer! qwer qwer qwer qwer?"

      cy.get('#mainText')
        .type(typedText)
        .should('have.value', typedText)

      cy.get('p#charCount')
        .should('have.text', 'Количество символов: 47')
      
      cy.get('p#wordCount')
        .should('have.text', 'Количество слов: 9')

      cy.get('p#sentenceCount')
        .should('have.text', 'Количество предложений: 3')
    })

    it('Textarea test 2', () => {
      const typedText = "Hello World!"

      cy.get('#mainText')
        .type(typedText)
        .should('have.value', typedText)

      cy.get('p#charCount')
        .should('have.text', 'Количество символов: 12')
      
      cy.get('p#wordCount')
        .should('have.text', 'Количество слов: 2')

      cy.get('p#sentenceCount')
        .should('have.text', 'Количество предложений: 1')
    })

    it('Button "Clear" test', () => {
      const typedText = "Hello World!"

      cy.get('#mainText')
        .type(typedText)
        .should('have.value', typedText)

      cy.get('#clear')
        .click('center')
      
      cy.get('#mainText')
        .should('have.value', "")
      
      cy.get('p#charCount')
        .should('have.text', 'Количество символов: 0')
      
      cy.get('p#wordCount')
        .should('have.text', 'Количество слов: 0')

      cy.get('p#sentenceCount')
        .should('have.text', 'Количество предложений: 0')
    })
  })