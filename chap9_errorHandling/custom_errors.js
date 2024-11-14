/* Myerror */
class Myerror extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/* ValidationError; */
class ValidationError extends Myerror {}

/* PropertyRequiredError */
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.property = property;
  }
}

/* wrapping exceptions */
class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "ReadError";
  }
}

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readU(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Syntax Error", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Validation Error", err);
    } else {
      throw err;
    }
  }
}

try {
  try {
    readU('{ "age": 25 }');
  } catch (e) {
    if (e instanceof ReadError) {
      // ReadError: Syntax Error
      alert(e);
      // Original error: SyntaxError: .......at position 1....
      alert("Original error: " + e.cause);
    } else {
      throw e;
    }
  }
} catch (error) {
  alert("External catch got: " + error.message);
}
