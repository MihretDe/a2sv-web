// cypress/integration/is_book_spec.js

describe('Is_book Component', () => {
  const accessToken = 'mockAccessToken'; // Mock token

  beforeEach(() => {
   
    cy.window().then((win) => {
      win.localStorage.setItem('accessToken', accessToken);
    });

    cy.visit('http://localhost:3000/components/Home'); 
  });

  it('should render with the correct initial background color when marked is true', () => {
    
    cy.intercept('GET', 'https://akil-backend.onrender.com/opportunities/search', {
      statusCode: 200,
      body: {
        data: [
          { id: '1', logoUrl: '', title: 'Job 1', orgName: 'Company', location: 'Location', description: 'Description', isBookmarked: true }
        ]
      }
    }).as('getJobs');
    
    cy.wait('@getJobs');

    cy.get('[data-testid="bookmark-icon"]').should('have.css', 'fill', 'rgb(0, 0, 0)'); 
  });

  it('should make a DELETE request with authorization token and update color when marked is true and button is clicked', () => {
    cy.intercept('DELETE', 'https://akil-backend.onrender.com/bookmarks/1', (req) => {
      
      expect(req.headers).to.have.property('authorization', `Bearer ${accessToken}`);
      req.reply({
        statusCode: 200,
        body: {}
      });
    }).as('deleteBookmark');

    cy.intercept('GET', 'https://akil-backend.onrender.com/opportunities/search', {
      statusCode: 200,
      body: {
        data: [
          { id: '1', logoUrl: '', title: 'Job 1', orgName: 'Company', location: 'Location', description: 'Description', isBookmarked: true }
        ]
      }
    }).as('getJobs');

    cy.wait('@getJobs');
    cy.get('[data-testid="my-button"]').click();
    cy.wait('@deleteBookmark');

    cy.get('[data-testid="bookmark-icon"]').should('have.css', 'fill', 'rgb(255, 255, 255)'); 

    
    cy.get('@deleteBookmark').then((interception) => {
      expect(interception.request.method).to.equal('DELETE');
      expect(interception.request.headers).to.have.property('authorization', `Bearer ${accessToken}`);
    });
  });

  it('should make a POST request with authorization token and update color when marked is false and button is clicked', () => {
    cy.intercept('POST', 'https://akil-backend.onrender.com/bookmarks/1', (req) => {
      
      expect(req.headers).to.have.property('authorization', `Bearer ${accessToken}`);
      req.reply({
        statusCode: 200,
        body: {}
      });
    }).as('postBookmark');

    cy.intercept('GET', 'https://akil-backend.onrender.com/opportunities/search', {
      statusCode: 200,
      body: {
        data: [
          { id: '1', logoUrl: '', title: 'Job 1', orgName: 'Company', location: 'Location', description: 'Description', isBookmarked: false }
        ]
      }
    }).as('getJobs');

    cy.wait('@getJobs');
    cy.get('[data-testid="my-button"]').click();
    cy.wait('@postBookmark');

    cy.get('[data-testid="bookmark-icon"]').should('have.css', 'fill', 'rgb(0, 0, 0)'); // black for marked

   
    cy.get('@postBookmark').then((interception) => {
      expect(interception.request.method).to.equal('POST');
      expect(interception.request.headers).to.have.property('authorization', `Bearer ${accessToken}`);
    });
  });
});
