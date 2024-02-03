//predict the output:
let fruit = { name: 'Apple' };

switch(fruit){
    case { name: 'Apple'}:
        console.log('It\'s an apple!');
        break;
    default:
        console.log("Unknown fruit.");
}

/**
 * Output:
 * Unknown fruit.
 */