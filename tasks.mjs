export function addTask(tasks, title, id) {
  const text = title.trim();
  return text ? [...tasks, { id, title: text, done: false }] : tasks;
}

export function toggleTask(tasks, id) {
  return tasks.map(task => task.id === id ? { ...task, done: !task.done } : task);
}

export function removeTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}
