describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  const nameInput = () => cy.get("input[name=username]");
  const emailInput = () => cy.get("input[name=email]");
  const passInput = () => cy.get("input[name=password]");
  const tosInput = () => cy.get("input[name=tos]");
  const submitBtn = () => cy.get("input[type=submit]");


  it("sanity check", () => {

    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.equal(5);
    expect(3 + 10).to.equal(13);
})

it("showing proper elements", () => {
  nameInput().should("exist");
  emailInput().should("exist");
  passInput().should("exist");
  tosInput().should("exist");
  submitBtn().should("exist");
})


describe("filling out inputs and submitting", () => {
  it("can navigate to site", () => {
    cy.url().should("include", "localhost");
  })


  it("can type in inputs", () => {
    nameInput()
      .should("have.value", "")
      .type("Michael")
      .should("have.value", "Michael");

    emailInput()
      .should("have.value", "")
      .type("michael@michael.com")
      .should("have.value", "michael@michael.com");
      
    passInput()
      .should("have.value", "")
      .type("password")
      .should("have.value", "password");      
  })

  it("can check checkboxes", () => {
    cy.get('[type="checkbox"]').check();
    tosInput().should("be.checked");
  })

  it("can submit form", () => {
    submitBtn().click();
  })

  it("can see if form was submitted by checking the form referred to defaul", () => {
    nameInput().should("have.value", "");
    emailInput().should("have.value", "");
    passInput().should("have.value", "");
    tosInput().should("not.be.checked");
  })

})































})

