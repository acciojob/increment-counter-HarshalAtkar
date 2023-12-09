//your JS code here. If required.
// let button = document.getElementById('incrementBtn');
// button.addEventListener('click', function increment();)

// function increment() {
//             let counter = document.getElementById("counter");
//             let count = parseInt(counter.innerText);
//             alert(`The un-incremented value is ${count}`);
//             counter.innerText = count + 1;
//  }    
let button = document.getElementById('incrementBtn');
button.addEventListener('click', function() {
			let counter = document.getElementById("counter");
            let count = parseInt(counter.innerText);
            alert(`The un-incremented value is ${count}`);
            counter.innerText = count + 1;
});