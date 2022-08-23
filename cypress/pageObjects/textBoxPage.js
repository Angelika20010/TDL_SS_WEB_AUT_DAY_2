import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get FullName() {
    return cy.get('#userName');
  }

  static get Email(){
    return cy.get("#userEmail")
  }

  static get CurrentAddress(){
    return cy.get("#currentAddress")
  }

  static get PernamentAddress(){
    return cy.get("#permanentAddress")
  }

  static get Submit(){
    return cy.get("#submit")
  }

  static get Output1(){
    return cy.get("#name") 

  }

  static get Output2(){
    return cy.get("#email") 

  }
  static get validCurrentAddressField() {
    return cy.get('p[id="currentAddress"]');
  }

  static get validPermanentAddressField() {
    return cy.get('p[id="permanentAddress"]');
  }
  
  
}

export default TextBoxPage;
