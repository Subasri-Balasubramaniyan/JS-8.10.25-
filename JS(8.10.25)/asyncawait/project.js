async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    console.log("Users List:");
    users.forEach(user => console.log(user.name));
  } catch (error) {
    console.log("Failed to fetch users:", error.message);
  }
}

getUsers();
