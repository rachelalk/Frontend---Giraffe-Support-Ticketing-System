describe("Giraffe Support", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("displays the ask button default", () => {
		cy.get(".q-button").should("have.text", "Ask");
	});

	it("can click the ask button to display the pop-up and add a new query", () => {
		cy.contains("Ask").click();

		const newName = "Luna";
		const newRoom = "10";
		const newQuestion = "Will this test work?";

		cy.get(":nth-child(1) > .q-input").type(`${newName}{enter}`);

		cy.get(":nth-child(2) > .q-input").type(`${newRoom}{enter}`);

		cy.get(":nth-child(3) > .q-input").type(`${newQuestion}{enter}`);

		cy.get(".css-tlfecz-indicatorContainer").click();
		cy.get("#react-select-2-option-1").trigger("mousemove").click();

		cy.get(".center-row > .q-button").click();

        cy.get(".close").click();

	});

	it("clicks the 'accept' button to update the ticket's status to 'in progress'", () => {
    	cy.contains("Accept").click();
	});
	
	it("clicks the 'complete' button to update the ticket's status to 'done'", () => {
    	cy.contains("Complete").click();
  	});
});

