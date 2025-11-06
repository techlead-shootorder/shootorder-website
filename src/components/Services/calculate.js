// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Add validation for 80D fields
document.addEventListener("DOMContentLoaded", function () {
 

  // Get the medical insurance premium fields
  const sec80dSelf = document.getElementById("sec80dSelf");
  const sec80dAbove = document.getElementById("sec80dAbove");

  // Add input event listeners to validate limits
  if (sec80dSelf) {
    sec80dSelf.addEventListener("input", function () {
      
      validateMedicalInsuranceLimit(sec80dSelf, sec80dAbove, 25000);
    });
  }

  if (sec80dAbove) {
    sec80dAbove.addEventListener("input", function () {
      
      validateMedicalInsuranceLimit(sec80dAbove, sec80dSelf, 50000);
    });
  }

  // Validate parents fields similarly
  const sec80dParentsSenior = document.getElementById("sec80dParentsSenior");
  const sec80dParentsNonSenior = document.getElementById(
    "sec80dParentsNonSenior"
  );

  if (sec80dParentsSenior) {
    sec80dParentsSenior.addEventListener("input", function () {
     
      validateMedicalInsuranceLimit(
        sec80dParentsSenior,
        sec80dParentsNonSenior,
        50000
      );
    });
  }

  if (sec80dParentsNonSenior) {
    sec80dParentsNonSenior.addEventListener("input", function () {
     
      validateMedicalInsuranceLimit(
        sec80dParentsNonSenior,
        sec80dParentsSenior,
        25000
      );
    });
  }
});

// Function to validate medical insurance limits
function validateMedicalInsuranceLimit(currentField, otherField, maxLimit) {
  

  // Get the values as numbers
  const currentValue = parseFloat(currentField.value) || 0;
  const otherValue = parseFloat(otherField.value) || 0;

  // console.log(`Current Value: ${currentValue}, Other Value: ${otherValue}`);

  // Check if the current field's value exceeds its max limit
  if (currentValue > maxLimit) {
    console.warn(
      `Limit exceeded for ${currentField.id}: ${currentValue} > ${maxLimit}`
    );
    currentField.value = maxLimit;
    alert(
      `Maximum limit for this field is ₹${maxLimit.toLocaleString("en-IN")}`
    );
  }

  // If both fields have values, validate they are mutually exclusive
  if (currentValue > 0 && otherValue > 0) {
    console.warn("Both fields have values - mutually exclusive validation");
    alert(
      "Please use either 'below 60 years' or '60 years or above' category for self/spouse/children, not both"
    );
    currentField.value = "";
  }
}

// Function to navigate to next tab
function nextTab(tabId) {
  // console.log(`Navigating to tab: ${tabId}`);
  document.getElementById(tabId).click();
  window.scrollTo(0, 0);
}

// Function to reset form
function resetForm() {
  // console.log("Starting form reset");

  // Reset all input fields
  const inputs = document.querySelectorAll('input[type="number"]');
  // console.log(`Resetting ${inputs.length} input fields`);
  inputs.forEach((input) => {
    input.value = "";
  });

  // Reset select elements
  const citySelect =
    document.getElementById("cityType") || document.getElementById("cityPaid");
  if (citySelect) {
    citySelect.value = "metro";
    // console.log("City selection reset to metro");
  }

  // Reset result values
  const resultElements = document.querySelectorAll(
    '[id$="TotalIncome"], [id$="TaxableIncome"], [id$="IncomeTax"], [id$="Surcharge"], [id$="Cess"], [id$="TotalTax"]'
  );
  // console.log(`Resetting ${resultElements.length} result elements`);
  resultElements.forEach((element) => {
    element.textContent = "0";
  });

  // Reset tax slab details
  const oldRegimeSlabDetails = document.querySelectorAll(
    "#oldRegimeSlabDetails td:last-child"
  );
  const newRegimeSlabDetails = document.querySelectorAll(
    "#newRegimeSlabDetails td:last-child"
  );

  // console.log(
  //   `Resetting old regime slab details: ${oldRegimeSlabDetails.length} cells`
  // );
  oldRegimeSlabDetails.forEach((cell) => {
    cell.textContent = "₹0";
  });

  // console.log(
  //   `Resetting new regime slab details: ${newRegimeSlabDetails.length} cells`
  // );
  newRegimeSlabDetails.forEach((cell) => {
    cell.textContent = "₹0";
  });

  // Navigate to first tab
  nextTab("financial-year-tab");
  // console.log("Form reset completed");
}

// Initialize event listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get DOM elements
    const grossSalary = document.getElementById("grossSalary");
    const businessProfit = document.getElementById("businessProfit");
    const interestIncome = document.getElementById("interestIncome");
    const dividendIncome = document.getElementById("dividendIncome");
    const miscIncome = document.getElementById("miscIncome");
    const calculateButton = document.getElementById("calculateTax");

    // Attach calculate event listener
    if(calculateButton) {
        calculateButton.addEventListener("click", function() {
            const totalIncome = (
                parseFloat(grossSalary?.value || 0) +
                parseFloat(businessProfit?.value || 0) +
                parseFloat(interestIncome?.value || 0) +
                parseFloat(dividendIncome?.value || 0) +
                parseFloat(miscIncome?.value || 0)
            );

            calculateTax(totalIncome);
            nextTab('results-tab');
        });
    }
});

// Fix tax calculation function
function calculateTax() {
    // Get income values
    const grossSalary = parseFloat(document.getElementById('grossSalary').value) || 0;
    const businessProfit = parseFloat(document.getElementById('businessProfit').value) || 0;
    const interestIncome = parseFloat(document.getElementById('interestIncome').value) || 0;
    const dividendIncome = parseFloat(document.getElementById('dividendIncome').value) || 0;
    const miscIncome = parseFloat(document.getElementById('miscIncome').value) || 0;

    // Calculate total income
    const totalIncome = grossSalary + businessProfit + interestIncome + dividendIncome + miscIncome;
    
    const selectedYear = document.getElementById("fy2025-26").checked ? "2025-26" : "2024-25";
    let newRegimeTax = 0;
    let newRegimeSlabTaxes = [0, 0, 0, 0, 0, 0, 0];
    let effectiveRebateLimit = 1200000; // Base rebate limit

    if (selectedYear === "2025-26") {
        // Adjust rebate limit for salaried individuals
        if (grossSalary > 0) {
            effectiveRebateLimit = 1275000; // 12.75 lakhs for salaried due to 75k standard deduction
        }
        
        // Calculate initial tax for all income
        newRegimeSlabTaxes = calculateSlabTaxes2025(totalIncome);
        newRegimeTax = newRegimeSlabTaxes.reduce((a, b) => a + b, 0);

        // Apply Section 87A rebate
        if (totalIncome <= effectiveRebateLimit) {
            const rebateAmount = Math.min(newRegimeTax, 60000);
            newRegimeTax = Math.max(0, newRegimeTax - rebateAmount);
            
            // Zero out all slab taxes if tax is fully rebated
            if (newRegimeTax === 0) {
                newRegimeSlabTaxes = [0, 0, 0, 0, 0, 0, 0];
            }
            // console.log(`Applied Section 87A rebate: ${rebateAmount}, Effective rebate limit: ${effectiveRebateLimit}`);
        }
    } else {
        // FY 2024-25 calculations
        // ...existing 2024-25 code...
    }

    // Update UI
    updateUIWithResults(totalIncome, newRegimeTax, newRegimeSlabTaxes);
}

function calculateSlabTaxes2025(income) {
    let taxes = [0, 0, 0, 0, 0, 0, 0];
    
    // Calculate each slab's tax
    if (income > 2400000) {
        taxes[6] = (income - 2400000) * 0.3;
        taxes[5] = 400000 * 0.25;
        taxes[4] = 400000 * 0.2;
        taxes[3] = 400000 * 0.15;
        taxes[2] = 400000 * 0.1;
        taxes[1] = 400000 * 0.05;
        taxes[0] = 0;
    } else if (income > 2000000) {
        taxes[5] = (income - 2000000) * 0.25;
        taxes[4] = 400000 * 0.2;
        taxes[3] = 400000 * 0.15;
        taxes[2] = 400000 * 0.1;
        taxes[1] = 400000 * 0.05;
        taxes[0] = 0;
    } else if (income > 1600000) {
        taxes[4] = (income - 1600000) * 0.2;
        taxes[3] = 400000 * 0.15;
        taxes[2] = 400000 * 0.1;
        taxes[1] = 400000 * 0.05;
        taxes[0] = 0;
    } else if (income > 1200000) {
        taxes[3] = (income - 1200000) * 0.15;
        taxes[2] = 400000 * 0.1;
        taxes[1] = 400000 * 0.05;
        taxes[0] = 0;
    } else if (income > 800000) {
        taxes[2] = (income - 800000) * 0.1;
        taxes[1] = 400000 * 0.05;
        taxes[0] = 0;
    } else if (income > 400000) {
        taxes[1] = (income - 400000) * 0.05;
        taxes[0] = 0;
    }
    
    return taxes;
}

function updateUIWithResults(totalIncome, tax, slabTaxes) {
    // Update the UI elements with calculation results
    document.getElementById('newRegimeTotalIncome').textContent = totalIncome.toLocaleString('en-IN');
    document.getElementById('newRegimeIncomeTax').textContent = tax.toLocaleString('en-IN');
    
    // Update slab details
    const slabElements = document.querySelectorAll('#newRegimeSlabDetails td:last-child');
    slabElements.forEach((element, index) => {
        element.textContent = `₹${slabTaxes[index].toLocaleString('en-IN')}`;
    });
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateTax');
    if (calculateButton) {
        calculateButton.addEventListener('click', function() {
            calculateTax();
            nextTab('results-tab');
        });
    }
});