startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
pauseBtn.addEventListener("click", pauseTimer);

var timer = new Timer();
function startTimer() {

timer.start({precision: 'secondTenths'});

timer.addEventListener('secondTenthsUpdated', function (e) {
    $('#display .values').html(timer.getTimeValues().toString(['hours', 'minutes', 'seconds', 'secondTenths']));
});
 
}

function pauseTimer() {
timer.pause();
}

function stopTimer() {
  timer.stop();

}