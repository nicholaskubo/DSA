String.prototype.toJadenCase = function () {
    let newArray = this.split(" ")
    for (i=0; i > newArray.length; i++) {
      console.log(newArray[i])
    }
  };

  const str = "hello how are you today"

  str.toJadenCase()