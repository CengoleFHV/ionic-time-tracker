describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("#root", "Open Tasks");
    cy.contains("#root", "Today finished Tasks");
  });
});

describe("Opening Add Site", () => {
  it("Visit the Add Site", () => {
    cy.visit("/");
    cy.visit("/add");
    cy.contains("ion-toolbar", "Add New Task");
    cy.contains("ion-col", "Task Name");
    cy.contains("ion-col", "Personal Note");
    cy.contains("ion-col", "Start Date (optional)");
    cy.contains("ion-col", "End Date (optional)");
    cy.contains("ion-col", "Task already Done?");
    cy.contains("ion-col", "Save");
  });
});

describe("Add Task", () => {
  const name: string = "Hello Cypress";
  const personalNote: string = "Time to get some E2E Testing done";
  it("Click on the Add Fab", () => {
    cy.visit("/");
    cy.get("#AddFab").click();
    cy.contains("ion-toolbar", "Add New Task");
    cy.get("[data-cy=name]").type(name);
    cy.get("[data-cy=personalNote]").type(personalNote);
    cy.get("#saveTaskButton").click();
    cy.reload();
    cy.contains("ion-card", name);
    cy.contains("ion-card", personalNote);
  });
});
