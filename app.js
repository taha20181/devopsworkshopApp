var counter = document.querySelector(".counter");
var counter_btn = document.querySelector(".counter-btn");
var reset_btn = document.querySelector(".reset-btn");

var count = 0;


counter_btn.addEventListener("click", function() {
	count = count + 1;
	counter.innerHTML = count;
	if (count == 1000) {
		counter.innerHTML = count;
		alert("You have Gained KHUSHI OF AQA MOULA TUS");
		count = 0;
		counter.innerHTML = count;
	}
});

reset_btn.addEventListener("click", function() {
	count = 0;
	counter.innerHTML = count;
})
