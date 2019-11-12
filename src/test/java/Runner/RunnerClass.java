package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



/* To run the single feature file*/
@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\features\\Exercise2.feature",
					glue="cucumber1",
					//plugin="html:target\\htmlreport"
					//plugin="junit:target\\xmlreport.xml"
					plugin="json:target\\jsonreport.json",
					//tags= {"@login,@payment,@logout"}
					tags= {"~@payment"})




/* To run the multiple feature file*/
//@RunWith(Cucumber.class)
//@CucumberOptions(features="src\\test\\resources\\features",glue="cucumber1")


public class RunnerClass {

}
