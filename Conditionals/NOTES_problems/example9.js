//predict the output:
let grade = 'B';

function getValue(grade){
    switch(grade){
        case 'A':
            return "Excellent";
        case 'B':
            return "Average";
        case 'C':
            return "Below than average";
        default:
            return "No Grade";
    }
}

console.log(getValue(grade));

/**
 * Output:
 * Average
 */