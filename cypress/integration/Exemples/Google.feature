Feature: Google Engine Main Page

  Scenario: Opening Google search engine page
    Given I open Google page
    Then I see "Google" in the title
    