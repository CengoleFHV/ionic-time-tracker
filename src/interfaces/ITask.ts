interface ITask {
  id: number;
  name: string;
  isDone: boolean;
  startTime?: Date;
  endTime?: Date;
  personalNote?: string;
}
