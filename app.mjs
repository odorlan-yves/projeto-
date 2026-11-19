import { addTask, toggleTask, removeTask } from './tasks.mjs';

const form = document.querySelector('form');
const input = document.querySelector('#task');
const list = document.querySelector('ul');
const status = document.querySelector('#status');
const storageKey = 'lista-tarefas-ci';
let tasks = JSON.parse(localStorage.getItem(storageKey) || '[]');

function render() {
  const pending = tasks.filter(task => !task.done).length;
  status.textContent = tasks.length ? `${pending} de ${tasks.length} pendente(s)` : 'Nenhuma tarefa ainda.';
  list.replaceChildren(...tasks.map((task, index) => {
    const item = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => {
      save(toggleTask(tasks, task.id));
      list.children[index]?.querySelector('input')?.focus();
    });
    const title = document.createElement('span');
    title.textContent = task.title;
    label.append(checkbox, title);

    const remove = document.createElement('button');
    remove.textContent = 'Remover';
    remove.setAttribute('aria-label', `Remover ${task.title}`);
    remove.addEventListener('click', () => {
      save(removeTask(tasks, task.id));
      input.focus();
    });
    item.append(label, remove);
    return item;
  }));
}

function save(nextTasks) {
  tasks = nextTasks;
  localStorage.setItem(storageKey, JSON.stringify(tasks));
  render();
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const nextTasks = addTask(tasks, input.value, crypto.randomUUID());
  if (nextTasks === tasks) return;
  save(nextTasks);
  form.reset();
  input.focus();
});

render();
