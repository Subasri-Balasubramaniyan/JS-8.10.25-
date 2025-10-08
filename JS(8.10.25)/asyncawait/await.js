async function fetchData() {
  console.log("Fetching data...");
  let data = await new Promise((resolve) => {    /* creating new promise */
    setTimeout(() => resolve("Data received!"), 2000);  /* setting time with 2 seconds delay it calls and resolve */
  });
  console.log(data); /* assigning value to data that is "data received" */
}

fetchData();   /* calling the async function */
