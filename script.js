//your JS code here. If required.
 function increment() {
            let counter = document.getElementById("counter");
            let count = parseInt(counter.innerText);
            alert(`The un-incremented value is ${count}`);
            counter.innerText = count + 1;
 }    