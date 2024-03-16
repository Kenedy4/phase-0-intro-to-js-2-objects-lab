// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
 
    return { ...employee, [key]: value };
  }
  const employee = {
    name: "Sam",
   
  };
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetaddress", "11 Broadway");
console.log(updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  

  function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = { ...employee };
    delete clonedEmployee[key];
    return clonedEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }