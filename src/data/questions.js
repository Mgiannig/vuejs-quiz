export default {
  groups: [
    {
      name: "Javascript",
      image: "javascript.png",
      questions: [
        {
          question: "What is array.map() for?",
          options: [
            { text: "Functions that can be invoked anywhere in the script, regardless of the scope" },
            { text: "Functions that are declared globaly" },
            { text: "Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.", correct: true }
          ],
        },
        {
          question: "What is a higher order function?",
          options: [
            { text: "“==” is used to compare values whereas, “ === “ is used to compare both value and types.", correct: true },
            { text: "“===” is used to compare values whereas, “ == “ is used to compare both value and types.." },
            { text: "Both work the same way" },
            { text: "=== is an ES6 feature that allows safe comparing" }
          ],
        },
        {
          question: "What is array.map() for?",
          options: [
            { text: "Creates a new array with all elements that pass the test implemented by the provided function." },
            { text: "Creates a new array populated with the results of calling a provided function on every element in the calling array.", correct: true },
            { text: "Executes a reducer function (that you provide) on each element of the array, resulting in a single output value." },
            { text: "Initalzies a new map constructor" }
          ],
        },
        {
          code: {
            intro: "What's the output?",
            lang: "javascript",
            code: `function randomFunc(){
              var obj1 = {name:"Vivian", age:45};
            
              return function(){
                console.log(obj1.name + " is "+ "awesome"); 
            
              }
            }
            
            var initialiseClosure = randomFunc();
            
            initialiseClosure(); `,
          },
          options: [
            { text: "<code>Vivian is awesome</code>", correct: true, },
            { text: "<code>Undefined</code>" },
            { text: "<code>ReferenceError</code>" },
            { text: "It will return the function without invoking it" },
          ],
        }
        {
          code: {
            intro: "What's the output?",
            lang: "javascript",
            code: `function sayHi() {
      console.log(name);
      console.log(age);
      var name = 'Lydia';
      let age = 21;
  } 
  
  sayHi();`,
          },
          options: [
            { text: "<code>Lydia</code> and <code>undefined</code>" },
            { text: "<code>Lydia</code> and <code>ReferenceError</code>" },
            { text: "<code>ReferenceError</code> and <code>21</code>" },
            {
              text: "<code>undefined</code> and <code>ReferenceError</code>",
              correct: true,
            },
          ],
        }, {
          //question: "Sarasa",
          code: {
            intro: "What's the output?",
            lang: "javascript",
            code: `function sayHi() {
      console.log(name);
      console.log(age);
      var name = 'Lydia';
      let age = 21;
  } 
  
  sayHi();`,
          },
          options: [
            { text: "<code>Lydia</code> and <code>undefined</code>" },
            { text: "<code>Lydia</code> and <code>ReferenceError</code>" },
            { text: "<code>ReferenceError</code> and <code>21</code>" },
            {
              text: "<code>undefined</code> and <code>ReferenceError</code>",
              correct: true,
            },
          ],
        },

        // question 2
        {
          code: {
            intro: "What's the output?",
            lang: "javascript",
            code: `for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }`,
          },
          options: [
            { text: "<code>0 1 2</code> and <code>0 1 2</code>" },
            { text: "<code>0 1 2</code> and <code>3 3 3</code>" },
            {
              text: "<code>3 3 3</code> and <code>0 1 2</code>",
              correct: true,
            },
            { text: "<code>3 3 3</code> and <code>3 3 3</code>" },
          ],
        },

        // question 3
        {
          code: {
            intro: "What's the output?",
            lang: "javascript",
            code: `const shape = {
      radius: 10,
      diameter() {
          return this.radius * 2;
      },
      perimeter: () => 2 * Math.PI * this.radius,
  };
      
  console.log(shape.diameter());
  console.log(shape.perimeter());`,
          },
          options: [
            { text: "<code>20</code> and <code>62.83185307179586</code>" },
            { text: "<code>20</code> and <code>NaN</code>", correct: true },
            { text: "<code>20</code> and <code>63</code>" },
            { text: "<code>NaN</code> and <code>63</code>" },
          ],
        },

        // question 4
        {
          code: {
            intro: "What's the output?",
            lang: "javascript",
            code: `let c = { greeting: 'Hey!' };
  let d;
  
  d = c;
  c.greeting = 'Hello';
  console.log(d.greeting);`,
          },
          options: [
            { text: "<code>Hello</code>" },
            { text: "<code>Hey!</code>" },
            { text: "<code>undefined</code>" },
            { text: "<code>ReferenceError</code>" },
            { text: "<code>TypeError</code>" },
          ],
        },
      ],
    },
    {
      name: "Docker",
      image: "docker.png",
      questions: [
        {
          question: "What command creates and runs a container?",
          options: [
            { text: "docker create ..." },
            { text: "docker run ..." },
            { text: "docker exec ..." },
          ],
        },
        {
          question:
            "What option shall we use to run a container in the background?",
          options: [
            { text: "-b or --background" },
            { text: "-d or --deattached" },
            { text: "--daemon" },
          ],
        },
      ],
    },
    {
      name: "Redis",
      image: "redis.svg",
      questions: [
        {
          question:
            "How many persistence options does Redis provide (select all that apply)",
          multiple: true,
          options: [
            { text: "NFS (Network File System) based" },
            { text: "RDB (point-in-time snapshots)", correct: true },
            { text: "AOF (Append Only File)", correct: true },
            { text: "None. Redis it's an in-memory cache/datastore" },
          ],
        },
        {
          question:
            "Redis string data-type is binary safe, this means that a Redis string can contain any kind of data, for instance: a raw JPEG image",
          options: [
            { text: "True", correct: true },
            { text: "False. Redis string can only hold UTF-8 encoded strings" },
          ],
        },
      ],
    },
    {
      name: "SQL",
      image: "sql.png",
      questions: [
        {
          question:
            "Which SQL statement is used to extract data from a database?",
          options: [
            { text: "<code>SELECT</code>", correct: true },
            { text: "<code>GET</code>" },
            { text: "<code>EXTRACT</code>" },
            { text: "<code>OPEN</code>" },
          ],
        },
        {
          question:
            "Which SQL statement is used to update data in a database??",
          options: [
            { text: "<code>SAVE</code>" },
            { text: "<code>UPDATE</code>", correct: true },
            { text: "<code>MODIFY</code>" },
            { text: "<code>SAVE AS</code>" },
          ],
        },
        {
          question:
            "Which SQL statement is used to insert new data in a database?",
          options: [
            { text: "<code>INSERT INTO</code>", correct: true },
            { text: "<code>ADD RECORD</code>" },
            { text: "<code>ADD NEW</code>" },
            { text: "<code>INSERT NEW</code>" },
          ],
        },
        {
          question:
            'With SQL, how do you select a column named "FirstName" from a table named "Persons"?',
          options: [
            {
              text: "<code>SELECT FirstName FROM Persons</code>",
              correct: true,
            },
            { text: "<code>EXTRACT FirstName FROM Persons</code>" },
            { text: "<code>SELECT Persons.FirstName</code>" },
          ],
        },
        {
          question:
            'With SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" starts with an "A"?',
          lang: "sql",
          options: [
            { code: "SELECT ALL FROM Persons WHERE FirstName = 'A*'" },
            { code: "SELECT Persons.* WHERE FirstName LIKE 'A*'" },
            { code: `SELECT * FROM Persons WHERE FirstName = 'A%'` },
            {
              code: `SELECT * FROM Persons WHERE FirstName LIKE 'A%'`,
              correct: true,
            },
          ],
        },
        {
          question:
            "Which SQL statement is used to return only different values??",
          lang: "sql",
          options: [
            { code: "SELECT DISTINCT", correct: true },
            { code: "SELECT UNIQUE" },
            { code: `SELECT DIFFERENT` },
          ],
        },
      ],
    },
  ],
};
