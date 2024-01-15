isTheUserLoggedIn = true
isTheCoursePurchased = true
 
isTheUserLoggedIn ?
isTheCoursePurchased ? console.log('Access Granted') : 
console.log('Please buy') : console.log('Please login')

/**
 * Output:
 * Access Granted
 */