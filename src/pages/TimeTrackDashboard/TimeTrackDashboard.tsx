import { IonAccordion } from "@ionic/react";
import { useEffect, useState } from "react";
import { getAllTasks } from "../../services/tasks.services";

export const TimeTrackDashboard = () => {
  const [allTasks, setAllTasks] = useState<ITask[]>([]);

  useEffect(() => {
    setAllTasks(getAllTasks());

    console.log(allTasks);
  }, []);

  return <IonAccordion></IonAccordion>;
};
