// Class to represent a Riddle
import {question} from "readline-sync"

export default class Riddle{
    constructor(riddle){
        this.id = riddle.id;
        this.name = riddle.name;
        this.question = riddle.question;
        this.answer = riddle.answer;
    }
    ask(){
        console.log("Riddle number: " + this.id);
        console.log("Question: " + this.question);
        console.log("");  
        let input = question("Enter your answer: ");
        while (input !== this.answer){
            console.log("Wrong answer, try again.");
            console.log("");
            input = question("Enter your answer: ");
        }
        console.log("");
        console.log("Well done! Correct answer.");
        console.log("");
    }
}