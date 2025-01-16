function checking() {
    const result = Math.random();
    if (result < 0.5) {
        console.log("\x1b[34m    ───────────────────────────── ");
        console.log("\x1b[34m    |                             |");
        console.log("\x1b[34m    |      Today is the day       | ");
        console.log("\x1b[34m    |     to push production.     | ");
        console.log("\x1b[34m    |      GO BACK TO WORK.       | ");
        console.log("\x1b[34m    |                             |");
        console.log("\x1b[34m    ───────────────────────────── ");
    } else {
        console.error("\x1b[34m    ───────────────────────────── ");
        console.error("\x1b[34m    |                             |");
        console.error("\x1b[34m    |   Today is not a good day   | ");
        console.error("\x1b[34m    |     to push production.     | ");
        console.error("\x1b[34m    |       GO HOME. SON          | ");
        console.error("\x1b[34m    |                             |");
        console.error("\x1b[34m    ───────────────────────────── ");
    }
}
module.exports = checking;
checking();
