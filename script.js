/*Beginner

1. Create an array with 3 items of your choice. Log it.
Expected: array with your 3 items printed
2. Log the length of the array from Task 1.
Expected: 3
3. Log the item at index 0 and index 2 of the array.
4. Change the item at index 1 to a new value. Log the array.
5. Add one item to the end of the array. Log the array.
6. Remove the last item from the array. Log the array and the removed value.
7. Add one item to the start of the array. Log the array.
8. Remove the first item from the array. Log the array and the removed value.
9. Check whether the array contains a specific value. Log true or false.
10. Find the position of a specific value in the array. Log the number.
11. Loop through the array with a for loop and log each item.
12. Loop through the array with a while loop and log each item.*/

// 1.
let fruits = ["Mango", "Banana", "Jackfruit"]
console.log(fruits)

// 2.
console.log(fruits.length)

// 3.
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

// 4.
fruits[1] = "Apple"
console.log(fruits)

// 5.
fruits.push("Orange")
console.log(fruits)

// 6.
fruits.pop()
console.log(fruits)

// 7.
fruits.unshift("Strawberry")
console.log(fruits)

// 8.
fruits.shift()
console.log(fruits)

// 9.
console.log(fruits.includes("Mango"))
console.log(fruits.includes("Blueberry"))

// 10.
console.log(fruits.indexOf("Apple"))

// 11.
for ( const fruit of fruits) {
    console.log(fruit)
}

// 12.
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i])
    i++;
}



/*Intermediate
1. Combine two arrays into one new array. Log the result.
2. Take a portion of an array (not the whole thing) without changing the original. Log the result.
3. Turn an array of words into a single sentence string.
Expected: a string like "word word word"
4. Check two variables (one array, one not) and log whether each is an array.
Expected: true then false, or false then true depending on order
5. Reverse an array of at least 5 items. Log the result.
6. Sort an array of names alphabetically. Log the result.
7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order).
8. Given an array of numbers, log only the values greater than 10, using a loop.
9. Given an array of numbers, calculate and log the total sum, using a loop.*/


// 1.
fruitArrNum = [1, 2, 3]
let newArray = fruits.concat(fruitArrNum)
console.log(newArray)


// 2.
let sliceNewArray = newArray.slice(1, 4)
console.log(sliceNewArray)
console.log(newArray)


// 3.
let sentenceArray = ["hey", "there", "how", "are", "you", "?"]
finalSentenceArray = sentenceArray.join(" ")
console.log(finalSentenceArray)


// 4.
let myName = "Radwan"
console.log(Array.isArray(sentenceArray))
console.log(Array.isArray(myName))


// 5.
console.log(newArray.reverse())


// 6.
let randomName = ["Rohim","Jobber", "Salam", "Borkot", "Abdul"]
randomName.sort()
console.log(randomName)


// 7.
let numbers = [5, 3, 7, 10, 16, 11, 13]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(numbers[i])
    }
}


// 8.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]    
}
console.log("Total sum:" ,sum)