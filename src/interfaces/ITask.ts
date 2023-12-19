import { Dayjs } from "dayjs";

export interface Task {
  name: string;
  isDone?: boolean;
  startDate?: Dayjs;
  endDate?: Dayjs;
  personalNote?: string;
}
