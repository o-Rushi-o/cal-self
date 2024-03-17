const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = [];

function showAllTasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerdiv = document.createElement("div");
    div.append(innerdiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerdiv.append(p);

    const span = document.createElement("span");
    span.innerText = value.description;
    innerdiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("class", "deleteBtn");
    btn.innerHTML = "-";
    div.append(btn);

    btn.addEventListener("click", () => {
      removeTasks();
      tasks.splice(index, 1);
      showAllTasks();
    });

    container.append(div);
  });
}

function removeTasks() {
  tasks.forEach(() => {
    const div = document.querySelector(".task");
    div.remove();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks();
  tasks.push({
    title: title.value,
    description: description.value,
  });
  showAllTasks();
});
