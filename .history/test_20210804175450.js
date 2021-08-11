function iqTest(numbers){
    let numArray = numbers.split(" ")
    let evenArray = []
    let oddArray = []

    for (i=0; i < numArray.length; i++) {
        numArray[i] % 2 ? oddArray.push(numArray[i]) : evenArray.push(numArray[i]) 
    }
    console.log(evenArray)
    console.log(oddArray)
    
  }

  iqTest("5 6 4 12 3")