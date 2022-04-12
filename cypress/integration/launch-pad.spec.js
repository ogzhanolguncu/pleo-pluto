/* eslint-disable no-undef */

describe("Integration tests", () => {
  it("should open and find Browse SpaceX Launch Pads", () => {
    cy.visit("/");

    cy.get("[data-testid=launch-pads-tab]").should(
      "contain.text",
      "Browse SpaceX Launch Pads"
    );
  });

  it("should navigate to launch-pad and check breadcrumb and navigate back to starting page", () => {
    cy.visit("/");

    cy.contains("Browse SpaceX Launch Pads").click();

    cy.contains("Home").click();

    cy.get("[data-testid=launch-pads-tab]").should(
      "contain.text",
      "Browse SpaceX Launch Pads"
    );
  });

  it("should navigate to details of a launch pad", () => {
    cy.visit("/");
    cy.contains("Browse SpaceX Launch Pads").click();

    cy.get("[data-testid=launch-pad-5]").click();
  });

  it("should navigate back to launch-pads page ", () => {
    cy.visit("/");
    cy.contains("Launch Pads").click();

    cy.get("[data-testid=launch-pad-name-5]").should(
      "contain.text",
      "VAFB SLC 3W"
    );
  });

  it("should add a launch-pad to favorites and check favorite drawer if really added", () => {
    cy.visit("/");
    cy.contains("Launch Pads").click();

    cy.get("[data-testid=launch-pad-favorite-5]").click();

    cy.contains("Favorites").click();

    cy.get("[data-testid=launch-pad-favorite-5  ]").should("have.length", 2);
  });

  it("should add a launch-pad to favorites then remove from favorites", () => {
    cy.visit("/");
    cy.contains("Launch Pads").click();

    cy.get("[data-testid=launch-pad-favorite-5]").click();

    cy.contains("Favorites").click();

    cy.get("[data-testid=launch-pad-favorite-5]").eq(1).click();

    cy.get("[data-testid=launch-pad-favorite-5]").should("have.length", 1);
  });

  it("should add a launch-pad to favorites then check details if favorite really added", () => {
    cy.visit("/");
    cy.contains("Launch Pads").click();

    cy.get("[data-testid=launch-pad-favorite-5]").click();

    cy.get("[data-testid=launch-pad-5]").click();

    cy.get("[data-testid=launch-pad-favorite-5]").should(
      "have.css",
      "fill",
      "rgb(66, 153, 225)"
    );
  });
});
