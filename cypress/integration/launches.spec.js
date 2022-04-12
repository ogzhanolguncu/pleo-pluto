/* eslint-disable no-undef */

describe("Integration tests", () => {
  it("should open and find Browse SpaceX Launches", () => {
    cy.visit("/");

    cy.get("[data-testid=launches-tab]").should(
      "contain.text",
      "Browse SpaceX Launches"
    );
  });

  it("should navigate to launches and check breadcrumb and navigate back to starting page", () => {
    cy.visit("/");

    cy.contains("Browse SpaceX Launches").click();

    cy.contains("Home").click();

    cy.get("[data-testid=launches-tab]").should(
      "contain.text",
      "Browse SpaceX Launches"
    );
  });

  it("should navigate to details of a flight", () => {
    cy.visit("/");
    cy.contains("Browse SpaceX Launches").click();

    cy.get("[data-testid=flight-number-108]").click();
  });

  it("should navigate back to launches page ", () => {
    cy.visit("/");
    cy.contains("Launches").click();

    cy.get("[data-testid=flight-name-108]").should(
      "contain.text",
      "Sentinel-6 Michael Freilich"
    );
  });

  it("should add a flight to favorites and check favorite drawer if really added", () => {
    cy.visit("/");
    cy.contains("Launches").click();

    cy.get("[data-testid=flight-favorite-108]").click();

    cy.contains("Favorites").click();

    cy.get("[data-testid=flight-favorite-108]").should("have.length", 2);
  });

  it("should add a flight to favorites then remove from favorites", () => {
    cy.visit("/");
    cy.contains("Launches").click();

    cy.get("[data-testid=flight-favorite-108]").click();

    cy.contains("Favorites").click();

    cy.get("[data-testid=flight-favorite-108]").eq(1).click();

    cy.get("[data-testid=flight-favorite-108]").should("have.length", 1);
  });

  it("should add a flight to favorites then check details if favorite really added", () => {
    cy.visit("/");
    cy.contains("Launches").click();

    cy.get("[data-testid=flight-favorite-108]").click();

    cy.get("[data-testid=flight-number-108]").click();

    cy.get("[data-testid=flight-favorite-108]").should(
      "have.css",
      "fill",
      "rgb(66, 153, 225)"
    );
  });
});
