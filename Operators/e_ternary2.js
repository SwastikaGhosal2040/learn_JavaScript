isTheUserLoggedIn = true
isTheCoursePurchased = false
 
isTheUserLoggedIn ?
isTheCoursePurchased ? console.log('Access Granted') : 
console.log('Please buy') : console.log('Please login')

/**
 * Output:
 * Please buy
 */