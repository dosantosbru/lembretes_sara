describe('Cria Lembretes sara.com.br', () => {
    const medicamentos = [
  
 
        'NEOZINE',
        'BIO-E',
        'BIOARGI',
        'BACLON',
        'BRITENS',
       
  ];
  
    beforeEach(() => {
      cy.visit('https://www.sara.com.br'); // visita a página da aplicação
      cy.wait(4000);
      cy.get('.base',{ timeout: 2000 }).click(); // clica no botão continuar para aceitar os termos e condições
    });
  
    it('Cria lembretes para medicamentos', () => {
      for (let i = 0; i < medicamentos.length; i++) {
        const medicamento = medicamentos[i];
  
        cy.get('svg.w-6.h-6.fill-white', { timeout: 1000 }).click(); // clica no botão perfil de usuário
        cy.wait(2000);
        cy.get('#inp-phone', { timeout: 1000 }).type('99999999999'); // digita o número de telefone válido
        cy.get('.base > .flex', { timeout: 1000 }).click(); // clica no botão continuar/acessar
        cy.wait(2000);
        cy.get('.grid > :nth-child(1) > .w-full', { timeout: 1000 }).click(); // clica na caixa de preenchimento token
        cy.get('.grid > :nth-child(1) > .w-full', { timeout: 1000 }).type('909090'); // digita o Token válido
        cy.get('.min-h-full > .text-xl').should('contain', 'Teste'); // valida login através do nome de usuário
  
        cy.get('.justify-start > :nth-child(2) > .overflow-hidden > .flex').click();
        cy.get('svg.w-6.h-6.fill-green').click();
        cy.get('.mb-4 > .relative > div > .w-full').type(medicamento);
        cy.wait(1000);
        cy.contains(medicamento).should('exist'); // verifica se o medicamento existe na lista
        cy.contains(medicamento).click(); // logo que o medicamento exista, ele clica no medicamento o selecionando
        cy.wait(1000);
        cy.get('#inp-quantosDiasDuracao').select('Por X dias');
        cy.get('#inp-dataInicio').type('2023-03-21');
        cy.get('#inp-cadaQuantosDias').type('20');
        cy.get('.base').click();
        cy.get('#inp-tipoFrequencia').select('Diariamente, X por dia');
        cy.get('#inp-ingestion\\.0\\.horarioIngestao').type('18:05');
        cy.get('.base').click();
        cy.get('.min-h-full > :nth-child(1) > .mb-4').should('contain', medicamento);
        cy.get('.min-h-full > :nth-child(3) > .mb-4').should('contain', '21/03/2023');
        cy.get('.base',{ timeout: 1000 }).click();
        cy.wait(2000);
        cy.get('.text-3xl').should('contain','Parabéns',{ timeout: 2000 });
        cy.clearCookies(); 
  
        if (i !== medicamentos.length - 1) {
        cy.clearLocalStorage()
        cy.visit('https://www.sara.com.br'); // visita a página da aplicação novamente
        cy.wait(3000);
        cy.get('.base').click(); // clica no botão continuar para aceitar os termos e condições
        }
      }
      cy.wait(1000);
      cy.get('.text-3xl').should('contain', 'Parabéns', { timeout: 2000 });
    });
  });
  

  