
// uppercase letters
let uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// numbers
let numbers = "1234567890";

function coupon_generator(length)
{

    // combination of letters and numbers
    let characters = uppercase_letters + numbers;

    // generated coupon
    let generated_coupon = "";

    for(let i=0;i<length;i++)
    {
        let randomIndex = Math.floor(Math.random()*characters.length);
        generated_coupon += characters.charAt(randomIndex);
    }

    return generated_coupon;
}

console.log(coupon_generator(8));