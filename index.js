// Write your solution in this file!
const employee= {
    name: "Tony",
    streetAddress: "123 street"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const copyOfEmployee= {
        ...employee
    }
    copyOfEmployee[key] = value
    return copyOfEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee   
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee= {
        ...employee
    }
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}