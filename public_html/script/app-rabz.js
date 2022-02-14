"use strict";

// Get reference to the registration form (in the DOM)
const contactForm = document.getElementById("contact-form");

// Check that the form exists (before using it)
if (contactForm) {

    // Disable the HTML validation - NOTE: "novalidate" is a boolean attribute (no value)
    contactForm.setAttribute("novalidate", "");
    
    // Add our own custom validation
    // Add an event listener to the form's "submit" event (NOT the "click" event of the submit button)
    contactForm.addEventListener("submit", (event) => {

        // Error message list
        let errorMessages = [];

        // Get reference to the error display area
        const errorArea = document.getElementById("error-area");

        // Clear all previous error messages
        errorArea.innerHTML = "";
        
        // Get references to the form field values
        // const firstName = contactForm.elements["firstName"];
        // const firstNameValue = firstName.value.trim();
        const firstNameValue = contactForm.elements["firstName"].value.trim();
        const lastNameValue = contactForm.elements["lastName"].value.trim();
        const emailValue = contactForm.elements["email"].value.trim();
        const phoneValue = contactForm.elements["phone"].value.trim();
        const commentValue = contactForm.elements["comment"].value.trim();

        /* 
         * START CHECKING THE VALIDATION RULES FOR EACH FIELD
         * 
         * Always check for INVALID data! (Not good/valid data)
         * 
         * Basic validation process:
         *   1. Check if field is INVALID (bad).
         *   2. If field is INVALID, cancel the submit event & display error (don't send data to server).
         *   3. If field is VALID, do nothing.
         */


        // Check if ANY required fields have NO value (firstName, lastName, email, comment)
        if (firstNameValue === "" || lastNameValue === "" || emailValue === "" || commentValue === "") {

            // Stop the form submitting (cancel the submit event)
            event.preventDefault();

            // Display error message
            errorArea.innerHTML += `<p>Enter all required fields (first name, last name, email).</p>`;

            // OPTIONAL: Stop the function - don't continue checking validation rules
            return;
        }

        // Check first name (2 or more chars)
        if (firstNameValue.length < 2) {

            // Add error message to the list
            errorMessages.push("First name must be 2 or more characters.");
        }

        // Check last name (2 or more chars)
        if (lastNameValue.length < 2) {
            errorMessages.push("Last name must be 2 or more characters.");
        }

        // Test email value against the regex pattern
        if (!regexEmail.test(emailValue)) {
            errorMessages.push("Email address does not seem to be valid.");
        }

        // Check for errors
        if (errorMessages.length > 0) {
            
            // Stop the form submitting (cancel the submit event)
            event.preventDefault();

            // Display ALL error messages
            errorArea.innerHTML += `<ul><li>${errorMessages.join("</li><li>")}</li></ul>`;
        }

    });

}