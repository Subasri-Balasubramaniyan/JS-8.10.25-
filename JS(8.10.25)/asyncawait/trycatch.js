async function getUser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {   /* if fetch fails error message will display */
    console.log("Error:", error.message);
  }
}

getUser();
