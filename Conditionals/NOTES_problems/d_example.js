//predict the output:
let day = "Monday";
let message = " ";

switch(day){
    case "Monday":
        message += "It's Monday. ";
    case "Tuesday":
        message += "It's Tuesday. ";
    case "Wednesday":
        message += "It's Wednesday. ";
    case "Thursday":
        message += "It's Thursday. ";
    case "Friday":
        message += "It's Friday. ";
    case "Saturday":
        message += "It's Saturday. ";
    case "Sunday":
        message += "It's Sunday. ";
}

console.log(message);

/**
 * Output:
 *  It's Monday. It's Tuesday. It's Wednesday. It's Thursday. It's Friday. It's Saturday. It's Sunday. 
 */