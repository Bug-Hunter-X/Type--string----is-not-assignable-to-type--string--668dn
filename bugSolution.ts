function greeter(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let user = ["Jane", "Doe"];
console.log(greeter(user));

//Alternative solution using destructuring if you only want to use the first element of the array.
function greeter2(person: string[]): string {
    const [firstName] = person;
    return "Hello, " + firstName;
}
console.log(greeter2(user));