function promptQuestion(question){
    let rlSync = require('readline-sync');
    let sentence =  rlSync.question(question);
    return sentence;
}

let firstName = promptQuestion('What is your first name? ');
let lastName = promptQuestion('What is your last name? ');


console.log(`Hello, ${firstName} ${lastName}!`);


