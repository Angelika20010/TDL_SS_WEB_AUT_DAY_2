import BasePage from "./basePage";

class CheckBoxPage extends BasePage{
    static get url(){
        return "/checkbox";
    }
    static get Plus(){
        return cy.get("[class = 'rct-option rct-option-expand-all']");
    }
    static get Notes(){
        return cy.get("[for='tree-node-notes']")
    }
    static get React(){
        return cy.get("[for='tree-node-react']")
    }
    static get Angular(){
        return cy.get("[for='tree-node-angular']")
    }
    static get General(){
        return cy.get("[for='tree-node-general']")
    }
    static get Excel(){
        return cy.get("[for='tree-node-excelFile']")
    }

    static get Result(){
        return cy.get('[class="display-result mt-4"]')
    }
    static get Office(){
        return cy.get("[for='tree-node-office']")
    }
    
    
}
export default CheckBoxPage;