describe("Is_book Component Interaction", () => {
  const accessToken = "mockAccessToken"; 
  beforeEach(() => {
    cy.window().then((win) => {
      win.localStorage.setItem("accessToken", accessToken);
    });

    cy.visit("http://localhost:3000/components/Home"); 
  });

  it("should render with the correct initial background color when bookmarked", () => {
    cy.intercept(
      "GET",
      "https://akil-backend.onrender.com/opportunities/search",
      {
        statusCode: 200,
        body: {
          data: [
            {
              id: "1",
              logoUrl: "",
              title: "Job 1",
              orgName: "Company",
              location: "Location",
              description: "Description",
              isBookmarked: true,
            },
          ],
        },
      }
    ).as("getJobs");

    cy.wait("@getJobs");
    cy.get('[data-testid="bookmark-icon"]').should(
      "have.css",
      "fill",
      "rgb(0, 0, 0)"
    ); 
  });

  it("should toggle bookmark state and make appropriate DELETE request when bookmarked", () => {
    cy.intercept(
      "DELETE",
      "https://akil-backend.onrender.com/bookmarks/1",
      (req) => {
        expect(req.headers).to.have.property(
          "authorization",
          `Bearer ${accessToken}`
        );
        req.reply({
          statusCode: 200,
          body: {},
        });
      }
    ).as("deleteBookmark");

    cy.intercept(
      "GET",
      "https://akil-backend.onrender.com/opportunities/search",
      {
        statusCode: 200,
        body: {
          data: [
            {
              id: "1",
              logoUrl: "",
              title: "Job 1",
              orgName: "Company",
              location: "Location",
              description: "Description",
              isBookmarked: true,
            },
          ],
        },
      }
    ).as("getJobs");

    cy.wait("@getJobs");
    cy.get('[data-testid="my-button"]').click();
    cy.wait("@deleteBookmark");

    cy.get('[data-testid="bookmark-icon"]').should(
      "have.css",
      "fill",
      "rgb(255, 255, 255)"
    );
  });

  it("should toggle bookmark state and make appropriate POST request when unbookmarked", () => {
    cy.intercept(
      "POST",
      "https://akil-backend.onrender.com/bookmarks/1",
      (req) => {
        expect(req.headers).to.have.property(
          "authorization",
          `Bearer ${accessToken}`
        );
        req.reply({
          statusCode: 200,
          body: {},
        });
      }
    ).as("postBookmark");

    cy.intercept(
      "GET",
      "https://akil-backend.onrender.com/opportunities/search",
      {
        statusCode: 200,
        body: {
          data: [
            {
              id: "1",
              logoUrl: "",
              title: "Job 1",
              orgName: "Company",
              location: "Location",
              description: "Description",
              isBookmarked: false,
            },
          ],
        },
      }
    ).as("getJobs");

    cy.wait("@getJobs");
    cy.get('[data-testid="my-button"]').click();
    cy.wait("@postBookmark");

    cy.get('[data-testid="bookmark-icon"]').should(
      "have.css",
      "fill",
      "rgb(0, 0, 0)"
    );
  });

  it("should display bookmarked jobs in the bookmarked list after toggling", () => {
    cy.intercept("POST", "https://akil-backend.onrender.com/bookmarks/1", {
      statusCode: 200,
      body: {},
    }).as("postBookmark");

    cy.intercept(
      "GET",
      "https://akil-backend.onrender.com/opportunities/search",
      {
        statusCode: 200,
        body: {
          data: [
            {
              id: "1",
              logoUrl: "",
              title: "Job 1",
              orgName: "Company",
              location: "Location",
              description: "Description",
              isBookmarked: false,
            },
          ],
        },
      }
    ).as("getJobs");

    cy.wait("@getJobs");
    cy.get('[data-testid="my-button"]').click();
    cy.wait("@postBookmark");

    cy.visit("http://localhost:3000/components/bookmarked");
    cy.intercept("GET", "https://akil-backend.onrender.com/bookmarks", {
      statusCode: 200,
      body: {
        data: [
          {
            id: "1",
            logoUrl: "",
            title: "Job 1",
            orgName: "Company",
            location: "Location",
            description: "Description",
          },
        ],
      },
    }).as("getBookmarkedJobs");

    cy.wait("@getBookmarkedJobs");
    cy.contains("Job 1").should("exist");
  });
});
