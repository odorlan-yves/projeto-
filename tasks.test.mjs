import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addTask, toggleTask, removeTask } from './tasks.mjs';

const first = { id: '1', title: 'Estudar', done: false };
const second = { id: '2', title: 'Publicar', done: false };

test('adiciona uma tarefa pendente e remove os espaços das pontas', () => {
  assert.deepEqual(addTask([first], '  Publicar  ', '2'), [first, second]);
});

test('ignora um título vazio', () => {
  assert.deepEqual(addTask([first], '   ', '2'), [first]);
});

test('marca e desmarca somente a tarefa selecionada', () => {
  const original = [first, second];
  const completed = toggleTask(original, '1');
  assert.deepEqual(completed, [{ ...first, done: true }, second]);
  assert.deepEqual(toggleTask(completed, '1'), original);
  assert.equal(first.done, false);
});

test('remove somente a tarefa selecionada', () => {
  assert.deepEqual(removeTask([first, second], '1'), [second]);
});

