String.prototype.toJadenCase = function () {
    const newArray = this.split(" ")
    for (i=0; i < newArray.length; i++) {
      newArray[i][0] + newArray[i].slice(1)

    }
  };

  const str = "hello how are you today"

  str.toJadenCase() 