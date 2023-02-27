"use strict";
class Employee {
    constructor(empid, empname, empdesignation, empsalary, empproject) {
        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;
    }
    getEmpdetails() {
        console.log(`empid :${this.empid}  empname :${this.empname}  empdesignation :${this.empdesignation}  empsalary :${this.empsalary} `);
    }
}
const emp = new Employee(1, "Hari", "developer", 30000, "webui");
emp.getEmpdetails();
