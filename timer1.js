const myTimer = function (time) {
  
  const newTime = Number(time)

  if (!isNaN(newTime) && newTime > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, newTime * 1000)
  }
}

const args = process.argv;

for (let x = 2; x < args.length; x++) {
  myTimer(args[x]);
}
