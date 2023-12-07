import { useEffect, useState } from "react";
import { getAllTasks } from "../../services/tasks.services";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
} from "@ionic/react";

const TimeTrackDashboard = () => {
  const [allTasks, setAllTasks] = useState<ITask[]>([]);

  useEffect(() => {
    setAllTasks(getAllTasks());
    console.log("allTasks", allTasks);
  }, [allTasks]);

  return (
    <IonGrid>
      <IonRow>
        <IonCol size="4">
          <IonText>
            <h2>Today finished Tasks</h2>
          </IonText>
        </IonCol>
        <IonCol size="8">
          {allTasks.map((task) => (
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{task.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{task.personalNote}</IonCardContent>
            </IonCard>
          ))}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default TimeTrackDashboard;
