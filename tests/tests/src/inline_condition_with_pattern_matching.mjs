// Generated by ReScript, PLEASE EDIT WITH CARE


let person1 = {
  TAG: "Teacher",
  age: 12345
};

let message;

if (person1.TAG === "Teacher") {
  message = "b";
} else {
  let tmp = 12345;
  message = typeof tmp !== "object" || tmp.TAG === "Vacations" ? "a" : "b";
}

let Test1 = {
  person1: person1,
  message: message
};

let person2 = {
  TAG: "Teacher",
  name: "Jane",
  age: 12345
};

let message$1;

if (person2.TAG === "Teacher") {
  message$1 = "Hello Jane.";
} else {
  let name = "Jane";
  let match = person2.reportCard;
  if (match.passing) {
    message$1 = "Congrats " + name + ", nice GPA of " + match.gpa.toString() + " you got there!";
  } else {
    let exit = 0;
    let tmp$1 = 12345;
    if (typeof tmp$1 !== "object") {
      message$1 = tmp$1 === "Sick" ? "How are you feeling?" : "Good luck next semester " + name + "!";
    } else {
      exit = 1;
    }
    if (exit === 1) {
      message$1 = person2.reportCard.gpa !== 0.0 ? "Good luck next semester " + name + "!" : "Come back in " + (12345)._0.toString() + " days!";
    }
    
  }
}

let Test2 = {
  person2: person2,
  message: message$1
};

export {
  Test1,
  Test2,
}
/* message Not a pure module */