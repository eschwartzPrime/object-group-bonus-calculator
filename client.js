const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

/**
 * Calculate bonus and compensation info
 * arg is an employee object (item from the employee array)
 * returns an object with
 * - name
 * - bonusPercentage
 * - totalCompensation
 * - totalBonus
 */
function bonusCalculator(employee) {
  // Test my function calling skillz
  //console.log('employee arg to bonusCalculator', employee);

  let compensationInfo = {
    // Use this employee's name
    name: employee.name,
    bonusPercentage: 'bonusPercentage',
    totalCompensation: 'totalComp',
    totalBonus: 'totalBonus'
  };

  return compensationInfo;
}

// Loop over employees array
for (let employee of employees) {
  // test my looping skillz
  //console.log('employee in for loop', employee);

  // Use each employee as a function input
  // compInfo is equal to the return value
  // of the bonusCalculator function
  let compInfo = bonusCalculator(employee);
  // console log result of each iteration
  console.log(`compInfo for ${employee.name}`, compInfo);

  // Eventually, we'll do something like
  // $('#table').append(/* compInfo */)
}
