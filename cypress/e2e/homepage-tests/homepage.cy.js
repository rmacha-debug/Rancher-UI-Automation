describe("Rancher Web Page Tests", () => {
  const rancherLoginUrl = "/dashboard/auth/login";
  let locale = Cypress.env("locale");
  let data;
  before(() => {
    if (locale === "en") {
      data = require("../../fixtures/i18n/en.json");
    } else if (locale === "cn") {
      data = require("../../fixtures/i18n/cn.json");
    }
  });

  beforeEach(() => {
    cy.visit(rancherLoginUrl);
  });

  it("Logs into the Rancher web page", () => {
    cy.fixture("testdata").then((userdata) => {
      cy.login(userdata.username, userdata.password);
    });
    cy.url().should("not.include", "/login");
    cy.get("h1").should("have.text", data.WelcomeMessage);
  });

  it("Checks if the main web page opens up", () => {
    cy.fixture("testdata").then((userdata) => {
      cy.login(userdata.username, userdata.password);
    });
    cy.get('div[class*="dashboard"]').should("exist");
  });

  it("Validates the main web page title", () => {
    cy.fixture("testdata").then((userdata) => {
      cy.login(userdata.username, userdata.password);
    });
    cy.title().should("eq", data.HomepageTitle);
  });
});
