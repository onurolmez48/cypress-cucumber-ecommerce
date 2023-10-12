import { Given,When,Then,And  } from "cypress-cucumber-preprocessor/steps";
import { signUp } from "../../pageObjects/signUpPage";


Given("Open ecommerce web page and verify home page",function(){
    signUp.webPage()
})

When("Click on Signup / Login button and Verify",() => {
    signUp.loginBtn()
})

Then("Enter name and email address",() => {
    signUp.getNameAndEmail('umitt211ttt','ahmetsd1111211a22sd@gmail.com')
})

And("Click Signup button and verify account", () => {
    signUp.signUpBtn()
})

Then('Fill details',() => {
    signUp.genderTitle()
    signUp.getDetails('onurolmez1','3','3','March', '3', '1998','1998')
    
})

And('Select CheckBox Sign up for our newsletter! and Receive special offers from our partners!',() => {
    signUp.checkBoxes()
})

Then('Fill details Form2',() => {
    signUp.getFillDetails('onur','olmez','icmeler','Canada','Canada','Ontario','Toronto','232323','5544545223')
})

And('Click Create Button and Verify',() => {
    signUp.createAccountBtn()
})

Then('Continue Verify And Delete Account Verify',()=> {
    signUp.continueAndDeleteBtn()
})