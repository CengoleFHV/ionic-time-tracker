const Tasks: ITask[] = [
  {
    id: 0,
    name: "get bread",
    isDone: false,
    personalNote: "Bitte kein Roggenbrot",
  },
  {
    id: 1,
    name: "Lebron Jahames",
    isDone: false,
    personalNote: "He a real one",
  },
];

const getAllTasks = () => {
  return Tasks;
};

export { getAllTasks };
