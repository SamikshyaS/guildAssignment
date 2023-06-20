Feature: Login functionality

Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    When I click on login
    Then I should see the page title as Swag Labs

