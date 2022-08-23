import BasePage from "./basePage";

class ButtonsPage extends BasePage{
    static get url(){
        return "/buttons";
    }

    static get twobutton(){
        return cy.get("#doubleClickBtn")
    }
    static get validatebutton(){
        return cy.get("#doubleClickMessage")
    }
    static get rightclickbutton(){
        return cy.get("#rightClickBtn")
    }
    static get validatebutton2(){
        return cy.get("#rightClickMessage")
    }
    static get clickme(){
        return cy.get(".mt-4:nth-child(3)>button")
    }
    static get validatebutton3(){
        return cy.get("#dynamicClickMessage")
    }
    
  
    
}
export default ButtonsPage;