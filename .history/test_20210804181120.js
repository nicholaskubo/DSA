function iqTest(numbers){
    let numArray = numbers.split(" ")
    let evenArray = []
    let oddArray = []

    for (i=0; i < numArray.length; i++) {
        numArray[i] % 2 ? oddArray.push(numArray[i]) : evenArray.push(numArray[i]) 
    }
    
    if (evenArray.length > oddArray.length) {
       const value = numArray.find( x => oddArray[0] == x)
        console.log(numArray.indexOf(value))
    }
    else {
        const value = numArray.find( x => evenArray[0] == x)
        console.log(numArray.indexOf(value))
    }
    
  }

  iqTest("5 7 4 12 3")