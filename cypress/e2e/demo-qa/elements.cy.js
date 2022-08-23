import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import RadioButtonsPage from "../../pageObjects/RadioButtonsPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";
import ButtonsPage from "../../pageObjects/ButtonsPage";


context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      TextBoxPage.FullName.type("Anzelika");
      TextBoxPage.Email.type("anzelikabureka@gmail.com");
      TextBoxPage.CurrentAddress.type("Current Address");
      TextBoxPage.PernamentAddress.type("Permanent Address");
      TextBoxPage.Submit.click()
      TextBoxPage.Output1.should("have.text", "Name:Anzelika");
      TextBoxPage.Output2.should("have.text", "Email:anzelikabureka@gmail.com");
      TextBoxPage.validCurrentAddressField.should("have.text", "Current Address :Current Address ");
      TextBoxPage.validPermanentAddressField.should("have.text", "Permananet Address :Permanent Address");
    });
  });

  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it("Add", () => {
      CheckBoxPage.Plus.click();
      CheckBoxPage.Notes.click();
      CheckBoxPage.React.click();
      CheckBoxPage.Angular.click();
      CheckBoxPage.General.click();
      CheckBoxPage.Excel.click();
      CheckBoxPage.Result.should("contain.text", "notes");
      CheckBoxPage.Result.should("contain.text", "react");
      CheckBoxPage.Result.should("contain.text", "angular");
      CheckBoxPage.Result.should("contain.text", "general");
      CheckBoxPage.Result.should("contain.text", "excelFile");

    })

    it("Add2" , () => {
      CheckBoxPage.Plus.click();
      CheckBoxPage.Office.click();
      CheckBoxPage.Result.should("contain.text", "office")
      
    })
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
  });

  context("Radio button scenarios", () => {
    // Create RadioButtons page object
    // Scenario 1:
    beforeEach(() => {
      RadioButtonsPage.visit();
    });

    it("Scenario1", () => {
      RadioButtonsPage.Yes.click();
      RadioButtonsPage.Message.should("contain.text", "Yes");
      RadioButtonsPage.Impressive.click();
      RadioButtonsPage.Message.should("contain.text", "Impressive");
      RadioButtonsPage.No.should("be.disabled")



    })
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {

    beforeEach(() => {
      WebTablesPage.visit();
    });

    it("Scenario1", () => {
      WebTablesPage.Addbutton.click();
      // TextBoxPage.FullName.type("Anzelika");
      WebTablesPage.First.type("Anzelika");
      WebTablesPage.Second.type("Bureka");
      WebTablesPage.Email.type("anzelikabureka@gmail.com");
      WebTablesPage.Age.type("20");
      WebTablesPage.Salary.type("1000");
      WebTablesPage.Department.type("Departament");
      WebTablesPage.Sub.click();
      WebTablesPage.searchInfo.type("Anzelika");
      WebTablesPage.name.contains("Anzelika").and('be.visible') ;

    })

    it.only("Scenario2", () => {
      
      
    })


    // Create WebTables page object
    // Create scenario 1:

    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });

    it("Scenario1", () => {
      ButtonsPage.twobutton.dblclick();
      ButtonsPage.validatebutton.should("have.text", "You have done a double click");
      ButtonsPage.rightclickbutton.rightclick();
      ButtonsPage.validatebutton2.should("have.text", "You have done a right click");
      ButtonsPage.clickme.click();
      ButtonsPage.validatebutton3.should("have.text", "You have done a dynamic click");


    })
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
