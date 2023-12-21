import init, { decrypt, encrypt } from "crypt_tasks";

import { Task } from "../Interfaces/ITask";

const getStoredTasks = async (): Promise<Task[]> => {
  let localStorageTasks = localStorage.getItem("tasks");

  if (!localStorageTasks) {
    return [];
  }

  let tasks: Task[] = [];

  await init().then(() => {
    if (localStorageTasks) {
      localStorageTasks = decrypt(localStorageTasks) || "";
    }

    tasks = JSON.parse(localStorageTasks || "[]");
  });

  return tasks;
};

const setStoredTasks = (tasks: Task[]) => {
  let toSetTasks: string = JSON.stringify(tasks);

  init().then(() => {
    let encryptedTasks: string = encrypt(toSetTasks);

    localStorage.setItem("tasks", encryptedTasks);
  });
};

const getAllTasks = async (): Promise<Task[]> => {
  let tasks: Task[] = await getStoredTasks();

  return tasks;
};

const addTask = async (task: Task) => {
  let tasks: Task[] = await getStoredTasks();

  tasks.push(task);

  setStoredTasks(tasks);
};

const deleteTask = async (id: number) => {
  let tasks = await getStoredTasks();

  tasks.splice(id, 1);

  setStoredTasks(tasks);
};

const startTask = async (id: number) => {
  let tasks = await getStoredTasks();

  tasks[id].startDate = new Date();

  setStoredTasks(tasks);
};

const finishTask = async (id: number) => {
  let tasks = await getStoredTasks();

  tasks[id].endDate = new Date();
  tasks[id].isDone = true;

  setStoredTasks(tasks);
};

const getTaskByIndex = async (index: number) => {
  let tasks = await getStoredTasks();

  return tasks[index];
};

const editTaskWithIndex = async (task: Task, index: number) => {
  let tasks = await getStoredTasks();

  tasks[index] = task;

  setStoredTasks(tasks);
};

export {
  addTask,
  deleteTask,
  editTaskWithIndex,
  finishTask,
  getAllTasks,
  getTaskByIndex,
  startTask,
};
