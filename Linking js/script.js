let nameVar = "Amaan";
function showVariable(){
    document.getElementById("var-demo").innerText = 
    `Hello, ${nameVar}! This is variable demo`;
}

function greetUser(name){
    document.getElementById("greet-output").innerText = 
    `Hello, ${name}! Welcome to our website.`;
}

function displayInput(){
    let userInput = document.getElementById("user-input").value;
    document.getElementById("display-output").innerText = 
    `You typed: ${userInput}`;
}

class Student{
    constructor(name , course){
        this.name = name;
        this.course = course;
    }
    getInfo(){
        return `${this.name} is learning ${this.course}`;
    }
}

let students = [];  //Empty Array
function addStudent(){
    const courses = ['HTML', 'CSS', 'JavaScript','Bootstrap'];
    const names = ['Amaan', 'Ali', 'Sara', 'Zara'];
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomCourse = courses[Math.floor(Math.random() * courses.length)];
    let newStudent = new Student(randomName, randomCourse);
    students.push(newStudent);
    renderStudents();
}

function renderStudents(){
    let container = document.getElementById("student-cards");
    container.innerHTML = "";
    students.forEach((student, index) => {
        let card = document.createElement("div");
        card.className = "student-card";
        card.innerHTML = `<h3>${student.name}</h3>
        <p>${student.getInfo()}</p>
        <button onclick="deleteStudent(${index})">Delete</button>`;
        container.appendChild(card);
    });
}

function deleteStudent(index){
    students.splice(index, 1);
    renderStudents();
}