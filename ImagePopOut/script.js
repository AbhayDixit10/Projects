const throttleFunction = (func, delay) => {
     let prev = 0;
    return (...args) => {
        let now = new Date().getTime();

        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;

            return func(...args);
        };
    };
};

let target = document.querySelector("#texts");
target.addEventListener("mousemove",
    throttleFunction(() => {
        console.log("button is clicked")
    }, 100));