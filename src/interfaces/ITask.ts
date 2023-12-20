import { Dayjs } from "dayjs";

export interface Task {
  name: string;
  isDone?: boolean;
  startDate?: Dayjs | Date;
  endDate?: Dayjs | Date;
  personalNote?: string;
}
