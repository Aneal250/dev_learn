// grade score
let grade = document.querySelector("#grade");

// result
let result = document.querySelector("#gradeResult");

console.log(result, "result");
// function to check grade

// improve the function Version 2.0
function checkGrade(score) {
  if(score < 0 || score > 100) {
    return "Invalid score. Please enter a number between 0 and 100.";
  } 

  if (score >= 90) {
    return "A"; // string
  } else if (score >= 80) {
    return "B"; // string
  } else if (score >= 70) {
    return "C"; // string
  } else if (score >= 60) {
    return "D"; // string
  } else {
    return "F"; // string
  }
}

//add event listener to the button
let button = document.querySelector("#checkGrade");
button.addEventListener("click", () => {
  result.textContent = checkGrade(Number(grade.value)); // convert string to number
});
