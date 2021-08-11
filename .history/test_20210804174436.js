String.prototype.toJadenCase = function () {
    let newArray = this.split(" ").map(i => i.replace(i[0], i[0].toUpperCase()))

    console.log(newArray)
  };

  const str = "hello how are you today"

  str.toJadenCase() 