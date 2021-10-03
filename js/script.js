// display the current LIVE time at the top with jQuery and moment
window.setInterval(function () {
  $("#currentDay").text(moment().format("ddd MM/DD h:mm:ss a"));
}, 1000);

// current time formatted to match time slots
var currentTime = moment().format("HH") + ":00";

var userInput = [];
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
  getTasks();
  // the for loop will go over my array of times to display each one
  for (var i = 0; i < timeSlots.length; i++) {
    // set ID based on number in index

    //create container for each row that will hold the time slot, the input and the save
    var taskRow = document.createElement("div");
    //every element that is created will have classes attributed
    taskRow.classList = "row time-block justify-content-center";
    // every element will be assigned an ID based off the position in the index
    taskRow.id = timeSlots.indexOf(timeSlots[i]);

    // create element to hold hourly time slot
    var timeSlot = document.createElement("h4");
    timeSlot.classList = "hour";
    timeSlot.id = timeSlots.indexOf(timeSlots[i]);
    timeSlot.textContent = timeSlots[i];

    // append timeSlot to taskRow
    taskRow.appendChild(timeSlot);

    // create taskInput element for tasks to go in, then append to the taskRow
    var taskInput = document.createElement("input");
    taskInput.classList = "time-block clearable";
    taskInput.id = "input" + timeSlots.indexOf(timeSlots[i]);

    // if localstorage value is present, set value
    if (userInput[i]) {
      taskInput.value = userInput[i];
    }
    taskRow.appendChild(taskInput);

    // create save button and append to taskRow
    var saveBtn = document.createElement("button");
    saveBtn.classList = "saveBtn";
    saveBtn.id = "btn" + timeSlots.indexOf(timeSlots[i]);
    saveBtn.innerHTML = "<i class='far fa-save'></i>";
    taskRow.appendChild(saveBtn);

    // finally, append all created elements to the main container
    domContainer.appendChild(taskRow);

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

// listener for which button is clicked to save corresponding task
$("button").on("click", function () {
  // variable to hold the ID of button click
  // var btnID = this.id;
  // temporary empty array for tasks to go into
  var tempTask = [];
  // loop through again to get values of inputs by index, push into empty array
  for (var i = 0; i < timeSlots.length; i++) {
    tempTask.push(document.getElementsByTagName("input")[i].value);
  }
  // update global array with 'tempTask'
  userInput = tempTask;
  localStorage.setItem("tasks", JSON.stringify(userInput));
});

function getTasks() {
  // if there are tasks present, get from local storage
  if (JSON.parse(localStorage.getItem("tasks"))) {
    userInput = JSON.parse(localStorage.getItem("tasks"));
  }
}

// make inputs clearable ?


// console.log({
//   userInput,
//   localStorage: JSON.parse(localStorage.getItem("tasks")),
// });