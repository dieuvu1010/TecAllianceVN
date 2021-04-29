Feature: Search Google
    Background: User open google
        Given User open google


    #=================================
    #Feature: Search Google
    #=================================

    @Severity_Low
    Scenario: User is able to search "JBehave" on google page
        When User input "JBehave" on google search field and enter
        Then The results include the string “What is JBehave?”