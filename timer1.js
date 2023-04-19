const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  const time = parseInt(args[i]);

  if (isNaN(time)) {
    console.log(`Invalid argument: ${args[i]}`);
    continue;
  }

  setTimeout(() => {
    console.log(`Timer done for ${time} seconds`);
    process.stdout.write("\x07"); // beep sound
  }, time * 1000);
}
