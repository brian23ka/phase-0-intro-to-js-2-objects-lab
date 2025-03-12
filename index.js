// Write your solution in here
let employee = {
    name: "liam",
    streetaddress: "2007 main srt",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,[key]:value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function  deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee };
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}