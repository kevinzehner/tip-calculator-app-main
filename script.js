"use strict";

// Create variables for input fields
const bill = document.getElementById("bill");
const people = document.getElementById("numberOfPeople");
const customTipInput = document.getElementById("customTip");

// Variables for results
const tipPerPerson = document.getElementById("tip_per_person");
const total = document.getElementById("total");

// Function to calculate and update the tip and total
function calculateTip() {
  // Get the bill amount, number of people, and custom tip percentage
  const billAmount = parseFloat(bill.value) || 0;
  const numberOfPeople = parseFloat(people.value) || 1;
  const customTipValue = parseFloat(customTipInput.value) || 0;

  // Get the selected tip percentage
  let tipPercentage = 0;
  const selectedButton = document.querySelector(".tip-button.active");
  if (selectedButton) {
    tipPercentage = parseFloat(selectedButton.value);
  }

  // Calculate the tip and total per person
  const tipAmount = (billAmount * (tipPercentage || customTipValue)) / 100;
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

// Event listeners for input fields
bill.addEventListener("input", calculateTip);
people.addEventListener("input", calculateTip);
customTipInput.addEventListener("input", calculateTip);

// Initial calculation when the page loads
calculateTip();
