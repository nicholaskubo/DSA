String.prototype.toJadenCase = function () {
    let newArray = this.split(" ").map(i => i[0].replace(i[0], i[0].toUpperCase()))

    console.log(newArray.join(" "))
  };

  const str = "hello how are you today"

  str.toJadenCase() 