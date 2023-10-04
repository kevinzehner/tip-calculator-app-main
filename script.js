"use strict";

// Create variables for input fields
const bill = document.getElementById("bill");
const people = document.getElementById("numberOfPeople");

const customButton = document.querySelector('.tip-button[value="custom"]');
const customInput = document.getElementById("customTipInput");

// Variables for results
const tipPerPerson = document.getElementById("tip_per_person");
const total = document.getElementById("total");

// Initialize the result elements with default values
tipPerPerson.textContent = "$0.00";
total.textContent = "$0.00";

// Function to calculate and update the tip and total
function calculateTip() {
  // Get the bill amount and number of people
  const billAmount = parseFloat(bill.value) || 0; // Use 0 if parsing fails
  const numberOfPeople = parseFloat(people.value) || 1; // Use 1 if parsing fails

  // Get the selected tip percentage
  let tipPercentage = 0;

  // Check if the custom input is visible and has a valid value
  if (customInput.style.display !== "none" && customInput.value !== "") {
    tipPercentage = parseFloat(customInput.value);
  } else {
    const selectedButton = document.querySelector(".tip-button.active");
    if (selectedButton) {
      tipPercentage = parseFloat(selectedButton.value);
    }
  }

  // Calculate the tip and total per person
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalPerPerson = (billAmount + tipAmount) / numberOfPeople;

  // Display the calculated values
  tipPerPerson.textContent = `$${tipAmount.toFixed(2)}`;
  total.textContent = `$${totalPerPerson.toFixed(2)}`;
}

// Add event listeners to tip percentage buttons
const tipButtons = document.querySelectorAll(".tip-button");
tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the "active" class from all buttons
    tipButtons.forEach((btn) => btn.classList.remove("active"));

    // Add the "active" class to the clicked button
    button.classList.add("active");

    // Calculate and update the tip and total
    calculateTip();
  });
});

// Event listener for custom input field
customInput.addEventListener("keyup", () => {
  // Calculate and update the tip and total
  calculateTip();
});

// Initial calculation when the page loads
calculateTip();
