import { Dayjs } from "dayjs";

export interface Task {
  id: number;
  name: string;
  isDone?: boolean;
  startDate?: Dayjs;
  endDate?: Dayjs;
  personalNote?: string;
}
