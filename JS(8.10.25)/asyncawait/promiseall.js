async function taskOne() {
  return new Promise(resolve => setTimeout(() => resolve("Task 1 done"), 2000));
}

async function taskTwo() {
  return new Promise(resolve => setTimeout(() => resolve("Task 2 done"), 1000));
}

async function runTasks() {
  console.log("Running tasks...");
  let results = await Promise.all([taskOne(), taskTwo()]);
  console.log(results);
}

runTasks();
