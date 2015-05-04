// Create an object constuctor function to model station lines and stops from.


function MtaLineStops(stnNameArr) {
this.stnNameArr = stnNameArr;
};

// Create key for lines and array of stops

var lineL = new MtaLineStops(['8thOnL','6th','Union Square', '3rd', '1st']);

var line6 = new MtaLineStops(['Grand Central', '33rd', '28thOn6', '23rdOn6', 'Union Square', 'Astor Place']);

var lineN = new MtaLineStops ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];


// alert to say Welcome to the subway

alert("welcome to the MTA Subway");


// Alert asking for your position

var choice = prompt("Which station are you leaving from?");

// start counting from the index

var leaveIndex = lineL.stnNameArr.indexOf(choice);

// Alert asking where you're getting off

var off = prompt("Where are you getting off?");

// Stop counting on exit

var offIndex = lineL.stnNameArr.indexOf(off);


console.log(offIndex);

