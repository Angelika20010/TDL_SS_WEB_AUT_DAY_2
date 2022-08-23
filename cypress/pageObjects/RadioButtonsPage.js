import BasePage from "./basePage";

class RadioButtonsPage extends BasePage{
    static get url(){
        return "/radio-button";
    }
    static get Yes(){
        return cy.get("[for='yesRadio']");
    }
    static get Message(){
        return cy.get("[class='mt-3']")
    }
    static get Impressive(){
        return cy.get("[for='impressiveRadio']")
    }
    static get No(){
        return cy.get("[id='noRadio']")
    }
    
    
    
}
export default RadioButtonsPage;