// task-1 Write a function that can calculate the average of a array of values (numbers)
function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0; // Return 0 for an empty array to avoid division by zero.
    }
  
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
  }
  
  const numbers = [90, 67, 45, 23, 10];
  const average = calculateAverage(numbers);
  console.log("Average of numbers :", average);

  //task-2 Print values of array using map function along with index as following output (”Value at index 1 is 10”, …)
  const values = [90, 67, 45, 23, 10];
values.map((value, index) => console.log(`Value at index ${index} is ${value}`));

//task-3 Task 3.Write an object of person with key values as below and print the values of the object not keys
const person = {
    name: "Faaiza",
    age: 21,
    country: "Pakistan",
    semester: "Fall 2023",
    cms: "javascript",
    details: {
      contactNumber1: "193-21-0002",
      email1: "faaizasaand7@gmail.com",
      contactNumber2: "123-536-8760",
      email2: "rajaumer@yahoo.com",
      contactNumber3: "4845-9093-8237",
      email3: "yousif.ali@gmail.com",
    },
  };
  
  // Printimg values of the person object
  for (const key in person) {
    if (typeof person[key] !== "object") {
      console.log(person[key]);
    } else {
      for (const innerKey in person[key]) {
        console.log(person[key][innerKey]);
      }
    }
  }
    

  
  