package cucumber1;

import cucumber.api.java.en.Given;

public class MultipleScenario {

	@Given("user login to TestMeApp using valid credentials")
	public void user_login_to_TestMeApp_using_valid_credentials() {
	    System.out.println("Login");
	}

	@Given("user searching prodects available in catelog")
	public void user_searching_prodects_available_in_catelog() {
		 System.out.println("Search Products");
	}

	@Given("user adding products to cart")
	public void user_adding_products_to_cart() {
		 System.out.println("Add products ");
	}

	@Given("user does payment")
	public void user_does_payment() {
		 System.out.println("Payment");
	}

	@Given("user logout from TestMeApp")
	public void user_logout_from_TestMeApp() {
		 System.out.println("Logout ");
	}
	
}
