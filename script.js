function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Tulis tugas terlebih dahulu!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const button = document.createElement("button");
    button.textContent = "❌";

    button.onclick = function () {
        li.remove();
    };

    li.appendChild(button);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}