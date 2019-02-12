// 1. Update this function to use a short circuit evaluation to set a default value for `message` to "Hello World!"
// Think back to node and how we set a PORT 😉

const logMessage = message => (message) ? message : "Yo fucker";

logMessage();
console.log(logMessage());

// 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)

const logTired = beenWorkingAllDay => {
  let message;
  (beenWorkingAllDay) ? (message = "I'm feeling really tired") : (message = "I'm wide awake!")

 return console.log(message);
};

logTired(true);
