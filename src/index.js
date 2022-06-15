import './style.css';
import plus from './plus-circle.png';
import trashCan from './trash-can-outline.png';
import { compareAsc, format } from 'date-fns'

const todo = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
};
 const domStuff = (() => {
     const renderProj = (project) => {
        const container = document.getElementById('projects');
        const newDiv = document.createElement('div');
        const newTitle = document.createElement('div');
        newTitle.innerHTML = project;
        newDiv.classList.add('project');
        newDiv.appendChild(newTitle);
        const trash = new Image();
        trash.src = trashCan;
        newDiv.addEventListener('click', (e)=> {
            if(e.target != trash) {
                currentProject = project;
                renderTasks(project);
            }
        });
        trash.addEventListener('click', ()=> {
            delete projectsList[project];
            container.removeChild(newDiv);
            if(project == currentProject) {
                if(Object.keys(projectsList)[0]) {
                    console.log('render trigger');
                    currentProject = Object.keys(projectsList)[0];
                    renderTasks(currentProject);
                }
                else {
                    currentProject = null;
                    const container = document.getElementById('tasks');
                    while(container.childElementCount > 1) {
                        container.removeChild(container.lastChild);
                    }
                }
            }
        });
        newDiv.appendChild(trash);
        container.insertBefore(newDiv, container.lastChild);
        currentProject = project;
        renderTasks(project);
     }
     const renderTask = (task) => {
         const container = document.getElementById('tasks');
         const newDiv = document.createElement('div');
         newDiv.classList.add('task');
         const taskTitle = document.createElement('div');
         taskTitle.innerHTML = task.title;
         newDiv.appendChild(taskTitle);
         const taskDate = document.createElement('div');
         taskDate.innerHTML = task.dueDate;
         newDiv.appendChild(taskDate);
         const trash = new Image();
         trash.src = trashCan;
         newDiv.appendChild(trash);
         trash.addEventListener('click', () => {
            for(let i = 0; i < projectsList[currentProject].length; i++) {
                if(projectsList[currentProject][i] == task) {
                    projectsList[currentProject].splice(i, 1);
                    break;
                }
            }
            container.removeChild(newDiv);
         });
         newDiv.addEventListener('click', (e)=> {
            if(e.target != trash) {
            //generate the details and append to body
        const details = document.createElement('div');
        details.classList.add('form-container');
        const detHead = document.createElement('h1');
        detHead.innerHTML = task.title;
        details.appendChild(detHead);
        const detDesc = document.createElement('div');
        detDesc.innerHTML = task.description;
        details.appendChild(detDesc);
        document.body.appendChild(details);
        const detDue = document.createElement('div');
        //add amount of days left in paranthesis
        detDue.innerHTML = `Due: ${task.dueDate} (In blank days)`;
        details.appendChild(detDue);
        overlay.classList.remove('hidden');
            }
         });
         container.appendChild(newDiv);
     }
     const renderTasks = (project) => {
        console.log('render')
        console.log(project)
        const container = document.getElementById('tasks');
            //remove existing tasks, making sure not to remove button
            while(container.childElementCount > 1) {
                container.removeChild(container.lastChild);
            }
            //add tasks to DOM
            for(const task in projectsList[project]) {
                domStuff.renderTask(projectsList[project][task]);
            }
     }
     const setActiveProj = (project) => {
        const container = document.getElementById('projects');
        currentProject = project;

     }
     return {renderProj, renderTask, renderTasks};
 })();

let projectsList = {};
if(window.localStorage.length) {
    let str = localStorage.getItem('data');
    projectsList = JSON.parse(str);
}
else { //no data, populate list
    projectsList['My Project'] = [todo('my task', 'do cool stuff', 'tomorrow', 'urgent')];
}

let currentProject = Object.keys(projectsList)[0];
/*Code for generating skeleton of page */
const content = document.getElementById('content');

const projectTitle = document.createElement('h2');
projectTitle.innerHTML = 'Projects';
content.appendChild(projectTitle);
const mainTitle = document.createElement('h1');
content.appendChild(mainTitle);
mainTitle.innerHTML = 'TodoList';

const projects = document.createElement('div');
projects.setAttribute('id', 'projects');
content.appendChild(projects);

const projBtnContainer = document.createElement('div');
const projBtn = new Image();
projBtn.src = plus;
projBtn.setAttribute('id', 'projBtn');
projBtnContainer.appendChild(projBtn);
projects.appendChild(projBtnContainer);

const tasks = document.createElement('div');
tasks.setAttribute('id', 'tasks');
content.appendChild(tasks);

const taskBtnContainer = document.createElement('div');
const taskBtn = new Image();
taskBtn.src = plus;
taskBtn.setAttribute('id', 'taskBtn');
taskBtnContainer.appendChild(taskBtn);
tasks.appendChild(taskBtnContainer);

//populate projects
for (const project in projectsList) {
    domStuff.renderProj(project);
};
//add project popup
const projForm = document.createElement('form');
projForm.classList.add('form-container');
projForm.setAttribute('id', 'projForm');
projForm.classList.add('hidden');
const projFormHead = document.createElement('h1');
projFormHead.innerHTML = 'Add a new project';
projForm.appendChild(projFormHead);
const projNameField = document.createElement('input');
projNameField.setAttribute('type', 'text');
projNameField.setAttribute('placeholder', 'project name');
projForm.appendChild(projNameField);
const submitProj = document.createElement('input');
submitProj.setAttribute('type', 'button');
submitProj.setAttribute('value', 'Create Project');
projForm.appendChild(submitProj);
document.body.appendChild(projForm);

//add task popup
const taskForm = document.createElement('form');
taskForm.classList.add('form-container');
taskForm.setAttribute('id', 'taskForm');
taskForm.classList.add('hidden');
const taskFormHead = document.createElement('h1');
taskFormHead.innerHTML = 'Add a new Task';
taskForm.appendChild(taskFormHead);
const taskNameField = document.createElement('input');
taskNameField.setAttribute('type', 'text');
taskNameField.setAttribute('placeholder', 'Task name');
taskForm.appendChild(taskNameField);
const taskDeskField = document.createElement('input');
taskDeskField.setAttribute('type', 'text');
taskDeskField.setAttribute('placeholder', 'Task name');
taskForm.appendChild(taskNameField);
const taskDescField = document.createElement('textarea');
taskDescField.setAttribute('placeholder', 'Description (optional)');
taskForm.appendChild(taskDescField);
const taskDateField = document.createElement('input');
taskDateField.setAttribute('type', 'date');
taskForm.appendChild(taskDateField);
const urgencyLabel = document.createElement('label');
urgencyLabel.setAttribute('for', 'urgency');
urgencyLabel.innerHTML = 'urgency';
taskForm.appendChild(urgencyLabel);
const taskUrgencyField = document.createElement('input');
taskUrgencyField.setAttribute('type', 'range');
taskUrgencyField.setAttribute('value', 'urgency');
taskForm.appendChild(taskUrgencyField);
const submitTask = document.createElement('input');
submitTask.setAttribute('type', 'button');
submitTask.setAttribute('value', 'Create Task');
taskForm.appendChild(submitTask);
document.body.appendChild(taskForm);

const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
overlay.classList.add('hidden');
document.body.appendChild(overlay);

projBtn.addEventListener('click', () => {
        projForm.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
taskBtn.addEventListener('click', ()=> {
        taskForm.classList.remove('hidden');
        overlay.classList.remove('hidden');
});

overlay.addEventListener('click', ()=> {
    projForm.classList.add('hidden');
    overlay.classList.add('hidden');
    taskForm.classList.add('hidden');
    if(document.body.lastChild != overlay) {
        //this removes tasks since they are generated when clicked (so many tasks)
        document.body.removeChild(document.body.lastChild);
    }
    });
submitProj.addEventListener('click', ()=> {
    if(document.getElementById('projForm').checkValidity()) {
        projectsList[projNameField.value] = [];
        domStuff.renderProj(projNameField.value);
        projNameField.value = '';
        projForm.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    });
submitTask.addEventListener('click', ()=> {
    if(document.getElementById('taskForm').checkValidity()) {
       projectsList[currentProject].push(todo(
        taskNameField.value,
        taskDescField.value,
        taskDateField.value,
        taskUrgencyField.value
       ));
        domStuff.renderTask(projectsList[currentProject][projectsList[currentProject].length - 1]);
        taskNameField.value = '';
        taskDescField.value = '';
        taskDateField.value = '';
        taskUrgencyField.value = '';
        taskForm.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    });
    window.onbeforeunload = ()=> {
        localStorage.clear();
        if(Object.keys(projectsList).length) {
            localStorage.setItem('data', JSON.stringify(projectsList));
        }
    }