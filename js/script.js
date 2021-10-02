// display the current LIVE time at the top with jQuery and moment
window.setInterval(function () {
  $("#currentDay").text(moment().format("ddd MM/DD h:mm:ss a"));
}, 1000);

// current time formatted to just the hour
var currentTime = moment().format("HH");

// range of times, from 7a to 10p
var timeSlots = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

// get the container by ID that will hold all the time slots that will be dynamicaly added.
// domContainer is the DOM - the variable name is generic but is helping me visualize/understand the terminology
var domContainer = document.querySelector("#timeslot-container");

var displayTimes = function () {
  // the for loop will go over my array of times to display each one
  for (var i = 0; i < timeSlots.length; i++) {
    // set ID based on number in index

    //create container for each row that will hold the time slot, the input and the save
    var taskRow = document.createElement("div");
    //every element that is created will have classes attributed
    taskRow.classList = "row time-block";
    // every element will be assigned an ID based off the position in the index
    // for example, the first time slot will have an index of 0, and all children inside the parent taskRow will have a corresponding ID
    // id
    taskRow.id = timeSlots.indexOf(timeSlots[i]);

    // create element to hold hourly time slot
    var timeSlot = document.createElement("h4");
    timeSlot.classList = "hour";
    // id
    timeSlot.id = timeSlots.indexOf(timeSlots[i]);
    timeSlot.textContent = timeSlots[i];

    // append timeSlot to taskRow
    taskRow.appendChild(timeSlot);

    // create taskInput element for tasks to go in, then append to the taskRow
    var taskInput = document.createElement("input");
    taskInput.classList = "time-block col-8";
    // id
    taskInput.id = "input" + timeSlots.indexOf(timeSlots[i]);
    taskRow.appendChild(taskInput);

    // create save button and append to taskRow
    var saveBtn = document.createElement("button");
    saveBtn.classList = "saveBtn";
    // id
    saveBtn.id = "btn" + timeSlots.indexOf(timeSlots[i]);
    saveBtn.innerHTML = "<i class='far fa-save'></i>";
    taskRow.appendChild(saveBtn);

    // finally, append all created elements to the main container
    domContainer.appendChild(taskRow);

    console.log(currentTime);
    // if statements to set color status
    // present
    if (currentTime === timeSlots[i]) {
      taskInput.classList = "present time-block col-8";
    }
    // future
    if (currentTime < timeSlots[i]) {
      taskInput.classList = "future time-block col-8";
    }
    // past
    if (currentTime > timeSlots[i]) {
      taskInput.classList = "past time-block col-8";
    }
  }
};

displayTimes();

// empty obj to hold string of tasks.
// var userInput = {}
// listener for which button is clicked to save corresponding task
$("button").on("click", function () {
  // variable to hold the ID of button click
  var btnID = this.id;
  console.log(btnID);
  var inputForms = document.querySelectorAll("input");
  console.log(inputForms.value);
  // for (var i = 0; i < timeSlots.length; i++) {
  //     var inputID =
  // }
});

// get the value of the input with corresponding ID

// set to localstorage

// function to add color to tasks based on past/present/future
// function setStatus() {
//     console.log(currentTime);
//     for (var i = 0; i < timeSlots.length; i++) {
//         // present

// }

// setStatus();

// var timeSlots = ["7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10pm"]
