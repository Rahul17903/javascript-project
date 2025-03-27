const task_name = document.getElementById('taskInput')
const btn = document.getElementById('addTask')
const taskList = document.getElementById("taskList")
const taskdetails = document.querySelector('.taskDetails')
btn.addEventListener("click",()=>{
    const taskText = task_name.value.trim();
    if(taskText){
        const li = document.createElement("li")
        li.className = "flex  items-center justify-between p-2 bg-gray-100 rounded-lg shadow-sm";

        const task = document.createElement("span")
        task.className =  "flex-grow text-gray-700";
        task.textContent = taskText;

        const checkbox = document.createElement("img")
        checkbox.src = "./images/unchecked.png"
        checkbox.className = "mr-3 h-4"
        checkbox.addEventListener("click",()=>{
            checkbox.src="./images/checked.png"
            task.className = "line-through"
        })


        const dltBtn = document.createElement("button")
        dltBtn.textContent = 'X';
        dltBtn.className = "text-red-500 hover:text-red-700 font-bold text-lg"
        dltBtn.addEventListener("click",()=>{
            li.remove();
        })
        li.appendChild(checkbox)
        li.appendChild(task)
        li.appendChild(dltBtn)
    

        taskList.appendChild(li)
        task_name.value = " "
    }
})