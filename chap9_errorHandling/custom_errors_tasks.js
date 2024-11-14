class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("this is a formatting error");
alert(err.message);
alert(err.name);
alert(err.stack);

alert(err instanceof SyntaxError); // true
