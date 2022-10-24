const tarefa_descanso = document.getElementById("Descanso")
const tarefa_estudo = document.getElementById("Estudo")
const tarefa_lab = document.getElementById('Lab')
const tarefa_Stream = document.getElementById('Stream')
const tarefa_Campeonato = document.getElementById('Campeonato')
const tarefa_medita = document.getElementById('Medita')
const deselectBtn = document.getElementById('deselect')
const taskContainer = document.querySelector('.task_container')
const scheduleContainer = document.querySelector('.container_da_rotina')
const resetBtn = document.querySelector('.deleteBtn')
const pop = document.querySelector('.pop-up_container')
const noBtn = document.getElementById('btn_no')
const yesBtn = document.getElementById('btn_yes')


let selectedColor, active

// Event Listener
taskContainer.addEventListener('click',selectTarefa)
scheduleContainer.addEventListener('click', setColors)
deselectBtn.addEventListener('click',resetTask)
resetBtn.addEventListener('click',openPopup)
noBtn.addEventListener('click',closePopup)
yesBtn.addEventListener('click',delete_Tarefas)

// Tarefa CLick
function selectTarefa(e){
    resetTask()

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'Descanso':
            seleciona_tarefa(tarefa_descanso, taskColor)
            break
        case 'Estudo':
            seleciona_tarefa(tarefa_estudo, taskColor)
            break
        case 'Lab':
            seleciona_tarefa(tarefa_lab, taskColor)
             break
        case 'Stream':
            seleciona_tarefa(tarefa_Stream, taskColor)
            break
        case 'Campeonato':
            seleciona_tarefa(tarefa_Campeonato, taskColor)
            break
        case 'Medita':
            seleciona_tarefa(tarefa_medita, taskColor)
            break
    }
}

//Coloque cores no Planner

function setColors(e){
    if(e.target.classList.contains('tarefa') && active === true){
        e.target.style.backgroundColor = selectedColor;
        //e.target.innerHTML = icon;
    }
}


// Select Task

function seleciona_tarefa(tarefa,color){
    tarefa.classList.toggle('selected');

    if(tarefa.classList.contains('selected')){
        active = true;
        selectedColor = color
        return selectedColor
    }else{
        active = false
    }

}


// reset

function resetTask(){
    const allTasks = document.querySelectorAll('.task_name')

    allTasks.forEach((item)=>{
        item.className = 'task_name'
    })
}

// delete

function delete_Tarefas(){
    const tasks = document.querySelectorAll('.tarefa')

    closePopup()

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })
}

// Open pop-up
function openPopup(){
    pop.style.display = 'flex';
}

// Close pop-up
function closePopup(){
    pop.style.display = 'none';
}