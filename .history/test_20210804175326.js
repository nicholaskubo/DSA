function iqTest(numbers){
    let numArray = numbers.split(" ")
    let evenArray = []
    let oddArray = []

    for (i=0; i < numArray.length; i++) {
        numArray[i] % 2 ? numArray[i].push(oddArray) : numArray[i].push(evenArray) 
    }
    console.log(evenArray)
    console.log(oddArray)
    
  }

  iqTest("5 6 4 12 3")