$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Exercise.feature");
formatter.feature({
  "name": "Test Registration",
  "description": "Description : User Story  ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test Registration with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user open application newtours.demoaut.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.user_open_application_newtours_demoaut_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registration",
  "keyword": "When "
});
formatter.match({
  "location": "Register.user_clicks_on_registration()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_validates_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter firstname",
  "keyword": "When "
});
formatter.match({
  "location": "Register.user_enter_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter lastname",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enter_lastname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter confirm password",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enter_confirm_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_click_on_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates Registration success",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_validates_Registration_success()"
});
formatter.result({
  "status": "passed"
});
});