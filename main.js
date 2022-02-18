let myAge = 20;

// In the line above we just declared a variable and set it to '20'

let earlyYears = 2;

// In the line above we just declared a variable and set it to '2'

earlyYears *= 10.5;

// The first two years of a dog's life count as 10.5 dog years each

let laterYears = (myAge - 2);

// Since we already accounted for the first two years, we subtracting the years ('2')

laterYears *= 4; 

// After the two years, one year of dog's age equals multiply 2

let myAgeInDogYears = (earlyYears + laterYears);

// In the code above we just did a quick math of the total years

let myName = "Niv".toLowerCase();

// In the code above we just declared a name and changed the whole characters to lower case

console.log("My name is "+ myName +". I am "+ myAge +" years old in human years which " +
            "is "+ myAgeInDogYears +" years old in dog years.");

// An output for the whole program
