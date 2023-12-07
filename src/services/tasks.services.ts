let Tasks: ITask[] = [
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

export { getAllTasks };
