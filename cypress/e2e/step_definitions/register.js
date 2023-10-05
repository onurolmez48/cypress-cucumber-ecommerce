import { Given,When,Then  } from "@badeball/cypress-cucumber-preprocessor";
import { signup } from "../../pageObjects/signuppage";

Given("Open ecommerce web page",() => {
    signup.getWebPage()
})