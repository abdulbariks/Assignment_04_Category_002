function calculateSleepTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }
  let totalSeconds = 0;
  for (const time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    totalSeconds += time;
  }
  const hours = parseInt(totalSeconds / 3600);
  const minutes = parseInt((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

console.log(calculateSleepTime([1000, 499, 519, 300]));
console.log(calculateSleepTime([1000, 2000, 725]));
console.log(calculateSleepTime([100, 3800]));
console.log(calculateSleepTime([]));
console.log(calculateSleepTime([5600]));
console.log(calculateSleepTime([100, 3800, "90"]));
