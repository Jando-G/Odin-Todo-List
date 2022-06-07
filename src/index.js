import './style.css';
import plus from './plus-circle.png';

const todoNode = (title, description, dueDate, priority) => {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    return {getTitle, getDescription, getDueDate, getPriority};
};

 const domStuff = (() => {
     const renderProj = (project) => {
        const container = document.getElementById('projects');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = project;
        container.appendChild(newDiv);
     }
     const renderTask = (task) => {
         console.log('nothing');
     }
     return {renderProj, renderTask};
 })();

let projectsList = {};

//if user has no data, populate a new project

projectsList['My Project'] = [];

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

//populate projects
for (const project in projectsList) {
    domStuff.renderProj(project);
    //populate tasks in this project

};

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

const projForm = document.createElement('form');
projForm.setAttribute('id', 'form-container');
projForm.classList.add('hidden');
const projFormHead = document.createElement('h1');
projFormHead.innerHTML = 'Add a new project';
projForm.appendChild(projFormHead);
const projNameField = document.createElement('input');
projNameField.setAttribute('type', 'text');
projNameField.setAttribute('id', 'projName');
projNameField.setAttribute('placeholder', 'project name');
projForm.appendChild(projNameField);
const submitProj = document.createElement('input');
submitProj.setAttribute('type', 'button');
submitProj.setAttribute('value', 'Create Project');
submitProj.setAttribute('id', 'subProj');
projForm.appendChild(submitProj);

document.body.appendChild(projForm);
const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
overlay.classList.add('hidden');
document.body.appendChild(overlay);

projBtn.addEventListener('click', () => {
        projForm.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

document.getElementById('overlay').addEventListener('click', ()=> {
    projForm.classList.add('hidden');
    overlay.classList.add('hidden');
    });

document.getElementById('subProj').addEventListener('click', ()=> {
    if(document.getElementById('form-container').checkValidity()) {
        projectsList[projNameField.value] = [];
        domStuff.renderProj(projNameField.value);
        projNameField.value = ''
        projForm.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    });