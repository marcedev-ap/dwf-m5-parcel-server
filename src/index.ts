let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log("hola" + counter);
  if (counter > 5) {
    clearInterval(intervalId);
  }
}, 1000);
