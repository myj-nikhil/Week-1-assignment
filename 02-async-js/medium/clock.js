function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    let a = hours;
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Format hours
    hours = hours % 12;  
    // Add leading zeros to minutes and seconds if necessary
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);
  
    // Display the time in HH:MM::SS format
    var time24 = a + ':' + minutes + ':' + seconds;
  
    // Display the time in HH:MM::SS AM/PM format
    var time12 = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  
    // Output the time
    console.log('24-hour format:', time24);
    console.log('12-hour format:', time12);
  }
  
  function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
  }
  
  // Call updateTime() initially to avoid delay
  updateTime();
  
  // Call updateTime() every second (1000 milliseconds)
  setInterval(updateTime, 1000);
  