alert("Welcome to my website!");

function greetUser() {
  document.getElementById("greeting").textContent = "Hello there!";
}

function sayHello() {
  const name = document.getElementById("username").value.trim();
  if(name.toLowerCase() === "john"){
  document.getElementById("output").textContent += "Lovely Name";
  }else{
  document.getElementById("output").textContent = "Hi, " + name + "!";
  }
}
