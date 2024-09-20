// 1. if raining, stay home.
// 2. Allow entry only when customer is over 18 years old
// 3. Dont prompt to join mailing list to existing users 
// 4. Give a free coffee to existing users with more than 
//    5 purchases and to any customer if they have a coupon 
// 5. When a user receives a new message and they have not snoozed notifications,
// play their custom sound notification or the default sound if they do not have a custom sound.


const shouldIStayHome = (raining) => {
    if (raining) {
        console.log("Stay home!");
    }
}

const letThemIn = (age) => {
    if (age > 18) {
        console.log("Please, come in! Welcome!");
    }
}

const joinMailingList = (user, users) => {
    if (user.indexOf(users) === -1) {
        console.log("Join our mailing list...or else...");
    }
}

const giveFreeCoffee = (customer, customers) => {
    if ((customer.indexOf(customers) !== -1 && customer.purchases > 5) || customer.hasCoupon) {
        console.log("Here is a free coffee!");
    }
}


