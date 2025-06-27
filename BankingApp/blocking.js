
// indirect call
// call back function
// Event Handler
// Listener
// callback fn1 


// Nonblocking function

function ProcessJob3(){
    console.log("processing request by Handler3");  
    console.log("performing task3");
    console.log("Generating Response3");
    console.log("Sending Response3")
}
// nonblocking function

function ProcessJob2(){
    console.log("processing request by Handler2");  
    console.log("performing task2");
    console.log("Generating Response2");
    console.log("Sending Response2")
}
// callback fn2
// nonblocking function

function ProcessJob1(){
    console.log("processing request by Handler1");  
    console.log("performing task1");
    console.log("Generating Response1");
    console.log("Sending Response1")
}

// processRequest();

// register callback function as first parameter
// set time interval for automatic function call

// set interval is a direct call
// but processRequest is indirect call 
// function mapping after certain interval


// scheduling tasks to be executed repeatedly after certain time
// interval

//Set background work execution after certain time interval
//is this a kind of multitasking


setInterval(ProcessJob1, 5000);
setInterval(ProcessJob2, 1000);
setInterval(ProcessJob3, 10000);

//Multitasking is happening using asynchronous way

console.log("Stopping main timer.js execution..........")
