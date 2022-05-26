const stdName =document.getElementById("std-name")
const stdAge = document.getElementById("std-age")
const stdCourse = document.getElementById("std-course")
const stdGender = document.getElementById("std-gender")
const submitEl = document.getElementById("submit-el")
let classInfo = []
const ulEl = document.getElementById("ul-el")
let rend =""

class student {
    constructor(name, age, course, gender) {
        this.name = name,
            this.age = age,
            this.course = course,
            this.gender = gender
    }
}

// let studentInfo = {
//     students: function (name,age,course,gender) {
//         return `name: ${this.name}
//     Age: ${this.age}
//     Course: ${this.course}
//     Gender: ${this.gender}`
//     }
// }

submitEl.addEventListener("click", function () {
    let info = new student(stdName.value,stdAge.value,stdCourse.value,stdGender.value)
    classInfo.push(info)
    stdName.value = ""
    stdAge.value = ""
    stdCourse.value = ""
    stdGender.value = ""
    render(classInfo) 
    console.log(info);
    console.log(classInfo);
})

function render() {
    for (let i = 0; i < classInfo.length; i++) {
        rend = `<li><p>name: ${classInfo[i].name}</p>
        <p>Age: ${classInfo[i].age}</p>
        <p>Course: ${classInfo[i].course}</p>
        <p>Gender: ${classInfo[i].gender}</p></li>`
    }
    ulEl.innerHTML += rend
}









