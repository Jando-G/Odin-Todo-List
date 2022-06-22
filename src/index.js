import './style.css';
import plus from './plus-circle.png';
import trashCan from './trash-can-outline.png';
import github from './github.png';
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
                setActiveProj(project);
                renderTasks(project);
            }
        });
        trash.addEventListener('click', ()=> {
            delete projectsList[project];
            container.removeChild(newDiv);
            if(project == currentProject) {
                if(Object.keys(projectsList)[0]) {
                    setActiveProj(Object.keys(projectsList)[0]);
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
        setActiveProj(project);
        renderTasks(project);
     }
     const renderTask = (task) => {
         const container = document.getElementById('tasks');
         const newDiv = document.createElement('div');
         const checkBox = document.createElement('input');
         checkBox.setAttribute('type', 'checkbox');
         checkBox.addEventListener('click', () => {
            if(checkBox.checked) {
                newDiv.classList.add('checked');
                for(let i = 0; i < projectsList[currentProject].length; i++) {
                    if(projectsList[currentProject][i] == task) {
                        projectsList[currentProject].splice(i, 1);
                        break;
                    }
                }
            }
            else {
                newDiv.classList.remove('checked');
                projectsList[currentProject].push(todo(
                    task.title,
                    task.description,
                    task.dueDate,
                    task.priority
                ));
            }
            
         });
         newDiv.appendChild(checkBox);
         newDiv.classList.add('task');
         const taskTitle = document.createElement('div');
         taskTitle.innerHTML = task.title;
         newDiv.appendChild(taskTitle);
         const taskDate = document.createElement('div');
         //date manipulation starts here
         const today = new Date().setHours(0, 0 , 0, 0);
         const result = (task.dueDate - today) / 86400000;
         let dueMsg = '';
         if(result === 0) {
            dueMsg = 'Due today';
         }
         else if(result === 1) {
            dueMsg = 'Due tomorrow';
         }
         else if(result < 0) {
            dueMsg = `Overdue! (${Math.floor(Math.abs(result))} days ago)`;
         }
         else {
            dueMsg = `Due in ${Math.floor(result)} days`;
         }
         taskDate.innerHTML = dueMsg;
         newDiv.appendChild(taskDate);
         newDiv.addEventListener('click', (e)=> {
            if(e.target != checkBox) {
            //generate the details and append to body
        const details = document.createElement('div');
        details.classList.add('form-container');
        const detHead = document.createElement('h1');
        detHead.innerHTML = task.title;
        details.appendChild(detHead);
        const detDesc = document.createElement('div');
        if(task.description) {
            detDesc.innerHTML = task.description;
        }
        else {
            detDesc.innerHTML = 'No description'
        }
        details.appendChild(detDesc);
        document.body.appendChild(details);
        const detDue = document.createElement('div');
        //add amount of days left in paranthesis
        detDue.innerHTML = `${format(new Date(task.dueDate), 'MM-dd-yyyy')} (${dueMsg})`;
        details.appendChild(detDue);
        overlay.classList.remove('hidden');
            }
         });
         newDiv.style.backgroundColor = `rgba(255, 0, 0, ${.1 * task.priority})`;
         container.appendChild(newDiv);
     }
     const renderTasks = (project) => {
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
        const projects = document.getElementsByClassName('project');
        if(document.getElementById('active')) {
            document.getElementById('active').removeAttribute('id');
        }
        for(let i = 0; i < projects.length; i++) {
            if(projects[i].firstChild.innerHTML == project) {
                projects[i].setAttribute('id', 'active');
                break;
            }
        }
        currentProject = project;
        mainTitle.innerHTML = project;
     }
     const generateProjBtn = () => {
        const projBtnContainer = document.createElement('div');
        const projBtn = new Image();
        projBtn.src = plus;
        projBtn.setAttribute('id', 'projBtn');
        projBtn.addEventListener('click', () => {
            projects.removeChild(projBtnContainer);
            generateProjForm();
        });
        projBtnContainer.appendChild(projBtn);
        projects.appendChild(projBtnContainer);
    };
    const generateProjForm = () => {
        const projFormContainer = document.createElement('form');
        projFormContainer.setAttribute('onsubmit', 'return false;');
        projFormContainer.setAttribute('id', 'projForm');
        const textField = document.createElement('input');
        textField.setAttribute('type', 'text');
        textField.setAttribute('maxlength', '27');
        textField.setAttribute('name', 'projName');
        textField.setAttribute('required', '');
        projFormContainer.appendChild(textField);
        const cancel = document.createElement('button');
        cancel.setAttribute('type', 'button');
        cancel.setAttribute('id', 'cancel');
        cancel.innerHTML = 'Cancel';
        cancel.addEventListener('click', () => {
            projects.removeChild(projFormContainer);
            generateProjBtn();
        });
        projFormContainer.appendChild(cancel);
        const submit = document.createElement('button');
        submit.setAttribute('type', 'button');
        submit.setAttribute('id', 'submit');
        submit.innerHTML = 'Add';
        submit.addEventListener('click', () => {
            if(document.getElementById('projForm').checkValidity()) {
               if(!(textField.value in projectsList)) {
                   projectsList[textField.value] = [];
                   domStuff.renderProj(textField.value);
                   projects.removeChild(projFormContainer);
                   generateProjBtn();
               }
               else {
                   alert(`A project with name the name "${textField.value}" already exists!`);
               }
           }
        });
        projFormContainer.appendChild(submit);
        projects.appendChild(projFormContainer);
    };
     return {renderProj, renderTask, renderTasks, generateProjBtn};
 })();

let projectsList = {};
if(window.localStorage.length) {
    let str = localStorage.getItem('data');
    projectsList = JSON.parse(str);
}
else { //no data, populate list
    projectsList['My Project'] = [todo('About this website', 
    `A simple todo list with project folders to sort your tasks in.
    Made by Alejandro Gutierrez 2022.`,
     new Date('06-21-2022').setHours(0, 0, 0, 0), 
     'urgent')];
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
domStuff.generateProjBtn();

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
//add project

//add task popup
const taskForm = document.createElement('form');
taskForm.classList.add('form-container');
taskForm.setAttribute('onsubmit', 'return false;');
taskForm.setAttribute('id', 'taskForm');
taskForm.classList.add('hidden');
const taskFormHead = document.createElement('h1');
taskFormHead.innerHTML = 'Add a new Task';
taskForm.appendChild(taskFormHead);
const taskNameField = document.createElement('input');
taskNameField.setAttribute('type', 'text');
taskNameField.setAttribute('placeholder', 'Task name');
taskNameField.setAttribute('maxlength', '30');
taskNameField.setAttribute('required', '');
taskForm.appendChild(taskNameField);
const taskDescField = document.createElement('textarea');
taskDescField.setAttribute('placeholder', 'Description (optional)');
taskNameField.setAttribute('maxlength', '50');
taskForm.appendChild(taskDescField);
const taskDateField = document.createElement('input');
taskDateField.setAttribute('type', 'date');
taskDateField.setAttribute('value', format(new Date(), 'yyyy-MM-dd'));
taskForm.appendChild(taskDateField);
const urgencyLabel = document.createElement('label');
urgencyLabel.setAttribute('for', 'urgency');
urgencyLabel.innerHTML = 'Priority';
taskForm.appendChild(urgencyLabel);
const taskUrgencyField = document.createElement('input');
taskUrgencyField.setAttribute('type', 'range');
taskUrgencyField.setAttribute('value', '0');
taskUrgencyField.setAttribute('min', '0');
taskUrgencyField.setAttribute('max', '5');
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

taskBtn.addEventListener('click', ()=> {
        taskForm.classList.remove('hidden');
        overlay.classList.remove('hidden');
});

overlay.addEventListener('click', ()=> {
    overlay.classList.add('hidden');
    taskForm.classList.add('hidden');
    if(document.body.lastChild != overlay) {
        //this removes tasks since they are generated when clicked (so many tasks)
        document.body.removeChild(document.body.lastChild);
    }
    });
submitTask.addEventListener('click', ()=> {
    if(document.getElementById('taskForm').checkValidity()) {
        let i;
        for(i = 0; i < projectsList[currentProject].length; i++) {
            if(taskDateField.valueAsDate.setHours(0, 0, 0, 0) + 86400000 <= projectsList[currentProject][i].dueDate) {
                break;
            }
        };
        for(i = i; i < projectsList[currentProject].length; i++) {
            if(taskUrgencyField.value < projectsList[currentProject][i].priority && 
                taskDateField.valueAsDate.setHours(0, 0, 0, 0) + 86400000 === projectsList[currentProject][i].dueDate) {
                i++;
                console.log('inc')
            }
            else {
                break;
            }
        }
        projectsList[currentProject].splice(i, 0, todo(
        taskNameField.value,
        taskDescField.value,
        taskDateField.valueAsDate.setHours(0, 0, 0, 0) + 86400000,
        taskUrgencyField.value
       ));
        domStuff.renderTasks(currentProject);
        taskNameField.value = '';
        taskDescField.value = '';
        taskDateField.value = format(new Date(), 'yyyy-MM-dd');
        taskUrgencyField.value = 0;
        taskForm.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    });
const gitanch = document.createElement('a');
gitanch.setAttribute('href', 'https://github.com/Jando-G');
const gitLogo = document.createElement('img');
gitLogo.setAttribute('src', github);
gitLogo.setAttribute('id', 'gitLogo');
gitanch.appendChild(gitLogo);
document.body.appendChild(gitanch);
    window.onbeforeunload = ()=> {
        localStorage.clear();
        if(Object.keys(projectsList).length) {
            localStorage.setItem('data', JSON.stringify(projectsList));
        }
    }
