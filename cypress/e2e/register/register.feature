Feature: : Sign Up and Verify

    Navigate to web page, sign up and Verify

    Scenario: Ecommerce Sign-UP
    Given Open ecommerce web page and verify home page
    When Click on Signup / Login button and Verify
    Then Enter name and email address
    And Click Signup button and verify account

    Scenario: Fill details: Title, Name, Email, Password, Date of birth
    Then Fill details
    And Select CheckBox Sign up for our newsletter! and Receive special offers from our partners!

    Scenario: Fill details Create Account and Delete
    Then Fill details Form2
    And Click Create Button and Verify 
    Then Continue Verify And Delete Account Verify
    