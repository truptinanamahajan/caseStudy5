#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: TestMeApp scenarios
 
 @login
  Scenario: TestMeApp Login
  * user login to TestMeApp using valid credentials
  
  @search
  Scenario: Search Products - testmeapp
  * user searching prodects available in catelog
  
  @add
  Scenario: Add products - testmeapp
  * user adding products to cart
  
  @payment
  Scenario: Payment - testmeaap
  * user does payment
  
  @logout
  Scenario: Logout - testmeaap
  * user logout from TestMeApp 
  

 
