import { useEffect, useState } from "react";

import dayjs from "dayjs";

import { IonCol, IonGrid, IonRow, IonSpinner, IonText } from "@ionic/react";
import { useQuery } from "@tanstack/react-query";

import { Task } from "../../Interfaces/ITask";
import { getAllTasks } from "../../Services/tasks.services";
import TaskCard from "../TaskCard/TaskCard";

const TimeTrackDashboard = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["tasks"],
    queryFn: getAllTasks,
  });

  const [tasksDoneToday, setTasksDoneToday] = useState<Task[] | undefined>([]);

  useEffect(() => {
    if (isSuccess && data) {
      setTasksDoneToday(
        data.filter(
          (t) =>
            t.isDone && dayjs(t.endDate).isToday() && t.endDate && t.startDate
        )
      );
    }
  }, [data, isSuccess]);

  return (
    <IonGrid>
      <IonRow>
        <IonCol sizeSm="4" sizeXs="12">
          <IonText className="ion-text-center">
            <h1>Today finished Tasks</h1>
          </IonText>
          {isLoading && <IonSpinner></IonSpinner>}
          {isSuccess && (
            <IonGrid>
              <IonRow>
                {tasksDoneToday && tasksDoneToday.length !== 0 ? (
                  tasksDoneToday.map((task, key) => (
                    <IonCol key={key} size="12">
                      <TaskCard
                        size={"minimal"}
                        task={task}
                        id={key}
                      ></TaskCard>
                    </IonCol>
                  ))
                ) : (
                  <IonText className="ion-text-center">
                    <h4>
                      You havent finished any Tasks today 😞 Time to get this
                      Bread 🍞
                    </h4>
                  </IonText>
                )}
              </IonRow>
            </IonGrid>
          )}
        </IonCol>
        <IonCol sizeSm="8" sizeXs="12">
          <IonText className="ion-text-center">
            <h1>Open Tasks</h1>
          </IonText>
          {isLoading && <IonSpinner></IonSpinner>}
          {isSuccess && data.length !== 0 ? (
            <IonGrid>
              <IonRow>
                {data.map((task, key) => (
                  <IonCol key={key} size="12">
                    <TaskCard task={task} id={key} />
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          ) : (
            <IonText className="ion-text-center">
              <h4>
                No Tasks were found 😥. Lets Start by adding some with the ➕
                Add Button
              </h4>
            </IonText>
          )}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default TimeTrackDashboard;
