String.prototype.toJadenCase = function () {
    const newArray = this.split(" ")
    for (i=0; i < newArray.length; i++) {
      console.log(newArray[i][0].toUpperCase() + newArray[i].slice(1))
        console.log(newArray.join())
    }
  };

  const str = "hello how are you today"

  str.toJadenCase() 