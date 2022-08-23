import BasePage from "./basePage";

class WebTablesPage extends BasePage{
    static get url(){
        return "/webtables";
    }
    static get Addbutton(){
        return cy.get("#addNewRecordButton")
    }
    static get Sub(){
        return cy.get("#submit")
    }
    static get First(){
        return cy.get("#firstName")
    }
    static get Second(){
        return cy.get("#lastName")
    }
    static get Email(){
        return cy.get("#userEmail")
    }
    static get Age(){
        return cy.get("#age")
    }
    static get Salary(){
        return cy.get("#salary")
    }
    static get Department(){
        return cy.get("#department")
    }
    static get searchInfo() {
        return cy.get("[id='searchBox']");
    }
    static get name(){
        return cy.get("[class = 'rt-td']")
    }

    

    
    
}
export default WebTablesPage;