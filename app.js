let input = document.querySelector("#input");
let addBtn = document.querySelector(".add-task-btn");
let listContaier = document.querySelector("#task-list");
let reloadIcon = document.querySelector("#reload-icon");

addBtn.addEventListener("click", () => {
    let taskText = input.value.trim();
    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }
const listItem = document.createElement("li");

listItem.innerHTML = `
    <span>${taskText}</span>
    <button class="complete-btn">Complete</button>
    <button class="delete-btn">Remove</button>
`;
listContaier.appendChild(listItem);
input.value = "";

listItem.querySelector(".complete-btn").addEventListener("click", () => {
    listItem.style.color = "#58b84c";
    listItem.innerHTML = `<span>${taskText}</span>
    <button class="complete-btn">Task Was Completed <i class="fa-solid fa-check-double"></i></button>`;
});

listItem.querySelector(".delete-btn").addEventListener("click", () => {
    listItem.remove();});
});

const reloadPage = () => {
    listContaier.innerHTML = "";
    reloadIcon.classList.add('clicked');

    setTimeout(() => {
    reloadIcon.classList.remove('clicked');
    }, 600);
};
reloadIcon.addEventListener("click", reloadPage);




