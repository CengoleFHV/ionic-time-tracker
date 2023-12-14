import { useEffect, useState } from "react";

import dayjs from "dayjs";

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
} from "@ionic/react";

import { Task } from "../../Interfaces/ITask";
import { getAllTasks } from "../../Services/tasks.services";

const TimeTrackDashboard = () => {
  const [allTasks, setAllTasks] = useState<Task[]>([]);

  useEffect(() => {
    const allTasks = getAllTasks();
    setAllTasks(allTasks);
  }, [allTasks]);

  return (
    <IonGrid>
      <IonRow>
        <IonCol size="4">
          <IonText>
            <IonText>
              <h2>Today finished Tasks</h2>
            </IonText>
          </IonText>
        </IonCol>
        <IonCol size="8">
          {allTasks &&
            allTasks.map((task) => (
              <IonCard
                key={task.id}
                color={`light ${task.startDate && !task.endDate && "warning"}${
                  task.endDate && "success"
                }`}
              >
                <IonCardHeader>
                  <IonCardTitle>{task.name}</IonCardTitle>
                </IonCardHeader>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonCardContent>{task.personalNote}</IonCardContent>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonCardContent>
                        <IonText>
                          <h2>Start Date</h2>
                        </IonText>
                        {task.startDate ? (
                          dayjs(task.startDate).format("D.M.YYYY - H:m:ss")
                        ) : (
                          <p>-</p>
                        )}
                      </IonCardContent>
                    </IonCol>
                    <IonCol>
                      <IonCardContent>
                        <IonText>
                          <h2>End Date</h2>
                        </IonText>
                        {task.endDate ? (
                          dayjs(task.endDate).format("D.M.YYYY - H:m:ss")
                        ) : (
                          <p>-</p>
                        )}
                      </IonCardContent>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCardContent>
                      {!task.startDate && !task.endDate && (
                        <IonButton color={"success"} onClick={() => {}}>
                          Start
                        </IonButton>
                      )}
                      {task.startDate && !task.endDate && (
                        <IonButton color={"danger"} onClick={() => {}}>
                          Finish
                        </IonButton>
                      )}
                    </IonCardContent>
                  </IonRow>
                </IonGrid>
              </IonCard>
            ))}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default TimeTrackDashboard;
