import {users, registerPage, registrationForm, validateUser, registerUser}from"./register.js";
//Navigation Links
const links = [
    {url: "#home", title: "Home", id: "home"},
    {url: "#project", title: "Project", id: "project"},
    {url: "#login", title: "Login", id: "login"},
];

const app = document.getElementById("app");

const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

//Pages
const homePage = document.createElement("section");
const projectPage = document.createElement("section");
const loginPage = document.createElement("section");

homePage.innerHTML = "<h1>Home Page</h1>";
projectPage.innerHTML = "<h1>Project Page</h1>";
loginPage.innerHTML = "<h1>Sign in</h1>";

homePage.setAttribute("id", "home");
homePage.setAttribute("class", "page");
projectPage.setAttribute("id", "project");
loginPage.setAttribute("id", "login");

links.forEach((link) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href = "${link.url}">${link.title}</a>`;
    li.addEventListener("click", () => {
        //console.log(e)
        const content = document.getElementById(link.id);
        content.style.display = "block";
        registerPage.style.display = "none";
        links.forEach((li) => {
            if (li.id !== link.id) {
                const content = document.getElementById(li.id);
                content.style.display = "none";
            }
        });
    });
    ul.appendChild(li);
});

//Login form
const form = document.createElement("form");
const emaillabel = document.createElement("label");
const passwordlabel = document.createElement("label");

const email = document.createElement("input");
const password = document.createElement("input");
const submitButton = document.createElement("input");
const registerButton = document.createElement("button");
registerButton.innerText = "Register";
form.method = "POST";
registerPage.appendChild(registerButton);

registerButton.addEventListener("click", () => {
    const loginContent = document.getElementById("login");
    loginContent.style.display = "none";
    registerPage.style.display = "block";
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const enteredEmail = email.value;
    const enteredPassword = password.value;
    
    if (!enteredEmail || !enteredPassword) { alert('Please fill in both email and password fields.'); 
    return;
    
   }
    
    const foundUser = users.find((user) => user.email === enteredEmail); 
    
    if (foundUser && foundUser.password === enteredPassword){
        alert('Log in Successfully');
    }else{
        alert('Incorrect email or password');
    }
    
});

submitButton.type = "Sign In"

submitButton.type = "submit";
email.type = "email";
password.type = "password";
emaillabel.innerText = "Email:";
passwordlabel.innerText = "Password:";
submitButton.type = "submit";
form.appendChild(emaillabel);
form.appendChild(email);
form.appendChild(passwordlabel);
form.appendChild(password);
form.appendChild(submitButton);
loginPage.appendChild(form);
loginPage.appendChild(registerButton);
app.appendChild(nav);
nav.appendChild(ul);
app.appendChild(homePage);
app.appendChild(projectPage);
app.appendChild(loginPage);
app.appendChild(registerPage);