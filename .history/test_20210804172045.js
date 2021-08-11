String.prototype.toJadenCase = function (exampleString) {
    let newArray = exampleString.split(" ")
    for (i=0; i > newArray.length; i++) {
      console.log(newArray[i])
    }
  };

  const str = "hello how are you today"

  toJadenCase(str)