import init, { decrypt, encrypt } from "crypt_tasks";
import dayjs from "dayjs";

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

  console.log(tasks);

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

  tasks[id].startDate = dayjs();

  setStoredTasks(tasks);
};

const finishTask = async (id: number) => {
  let tasks = await getStoredTasks();

  tasks[id].endDate = dayjs();
  tasks[id].isDone = true;

  setStoredTasks(tasks);
};

// const editTask = (Task: Task, id: number) => {
//   const findIndex = Tasks.findIndex((t) => t.id === id);
//   Tasks[findIndex] = Task;
//   return Tasks;
// };

export { addTask, deleteTask, finishTask, getAllTasks, startTask };
