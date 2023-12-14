import { Task } from "../Interfaces/ITask";

let Tasks: Task[] = [
  {
    id: 0,
    name: "get bread",
    isDone: false,
    personalNote: "Bitte kein Roggenbrot",
  },
];

const getAllTasks = () => {
  return Tasks;
};

const addTask = (task: Task) => {
  task.id = Tasks.length;

  Tasks.push(task);
};

const editTask = (Task: Task, id: number) => {
  const findIndex = Tasks.findIndex((t) => t.id === id);
  Tasks[findIndex] = Task;
  return Tasks;
};

export { addTask, editTask, getAllTasks };
