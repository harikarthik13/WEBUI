class Employee {
    empid?: number | string;
    empname: string;
    empdesignation: string;
    empsalary: number;
    empproject?: string;

    public constructor(empid: number | string,empname: string, empdesignation: string, empsalary: number, empproject: string)

    {

        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;

    }
    getEmpdetails(){
        console.log(`empid :${this.empid}  empname :${this.empname}  empdesignation :${this.empdesignation}  empsalary :${this.empsalary}  empproject :${this.empproject}`)
    } 
}
    const emp = new Employee(1,"Hari","developer",30000,"webui");
    emp.getEmpdetails();
