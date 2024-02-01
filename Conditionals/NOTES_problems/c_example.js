let role = "CEO";
let salary = 100000;

switch(role){
    case "employee":
    case "hr":

    case "manager":
        salary += 0.05*salary;
          break;
    case "CEO":
    case "CIO":
    case "CTO":
        salary += 0.1*salary;
        break;
    default:
        console.log("Unknown Role");

}

console.log(salary);