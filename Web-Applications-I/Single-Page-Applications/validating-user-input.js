// One common strategy is to compare the input string to a regular expression model of expected characters and handle the input based on the results of the comparison.

// Another popular method is to have a library such as Yup handle the validation for us - 
// yup has built in methods to deal with email addresses, passwords, strings, numbers, and more. You can read the full documentation here.

// npm install yup

import * as yup from 'yup'

// lets look at how we could use Yup to validate if an input was a string
let schema = yup.string();

await schema.isValid('hello world');
// This would return "true" since 'hello world' is a string

// Validating a Form
// Form validation is slightly more complicated but it follows the same logical pattern. 
// *** First we declare a schema, then we validate data.

// In a forms app, the schema defines what the form looks like. 
// It is kind of like a form outline, telling yup what the existing fields are and how they should be validated. 

import React, {useState, useEffect} from "react";
import * as Yup from "yup";
// You may see this as (import Yup from 'yup') in some tutorials, the above method seems less buggy

  // Basic submit event handler and console.log to confirm form submitted
  const formSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  // Create state for the form values. We will want to update state later on, but for now... empty strings!
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    password: ""
  });

  // State for the error messages
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    terms: ""
  });

  const formSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup
      .string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
    terms: Yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions")
      // required isn't required for checkboxes.
  });

  const inputChange = e => {
    // let's pull the information of interest from the target of the event
    const { name, value } = e.target
    // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.
    yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setErrors({
          ...errors, [name]: ""
        });
      })
      // if the validation is unsuccessful, we can set the error message to the message
      // returned from yup (that we created in our schema)
      .catch(err => {
        setErrors({
          ...errors, [name]: err.errors[0]
        });
      });

    // Whether or not our validation was successful, we will still set the state to the new value as the user is typing
    setFormState({
      ...formState, [name]: value
    });
  };

  /* Each time the form value state is updated, check to see if it is valid per our schema.
  This will allow us to enable/disable the submit button.*/
  useEffect(() => {
  /* We pass the entire state into the entire schema, no need to use reach here.
  We want to make sure it is all valid before we allow a user to submit
  isValid comes from Yup directly */
  formSchema.isValid(formState).then(valid => {
    setButtonDisabled(!valid);
  });
}, [formState]);


// Define form elements: email, password and terms/conditions
// When validation isn't successful we need to display an error message to the user in the JSX, letting them know how to fix the problem.
function LoginForm() {
  return (
    <form>
      <label htmlFor="emailInput">
        Name
        <input id="emailInput" type="email" name="email" placeholder="Email" />
      </label>
      { errors.email.length > 0 && <p className="error">{errors.email}</p> }

      <label htmlFor="passwordInput">
        Password
        <input id="passwordInput" type="password" name="password" placeholder="Password" />
      </label>
      { errors.password.length > 0 && <p className="error">{errors.password}</p> }

      <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
        <input id="termsInput" type="checkbox" name="terms" />
      </label>

      <button>Submit!</button>
    </form>
  )};


// The formSchema is a lot like a propType definition because you need to tell Yup what shape the data is supposed to take.

// The customization part is pretty straightforward. 
// For the email field, Yup is looking for a string that looks like an email-pattern, 
// and you need to have this field (it's required).
// The password schema shows that you expect a string with a minimum of 6 characters. Additionally, the user shouldn't be able to submit the form without a password.

// options:
// https://github.com/jquense/yup