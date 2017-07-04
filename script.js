  //basic function
  var work = function() {
    console.log("working hard!")
  }

  //invoke function as a parameter
  var dowork = function(f) {
    console.log("start")
    try {
      f();
    } catch (ex) {}
    console.log("end");
  };
  //create an object
  //revealing module pattern
  var createworker = function() {

    var workcount = 0;
    var task1 = function() {
      workcount += 1;
      console.log("task1 " + workcount);
    }
    var task2 = function() {
      workcount += 1;
      console.log("task2 " + workcount);
    }
    return {
      job1: task1,
      job2: task2
    };
  }

  var worker = createworker();
