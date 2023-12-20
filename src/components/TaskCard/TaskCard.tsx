import "./TaskCard.css";

import clsx from "clsx";
import dayjs from "dayjs";
import { close, closeOutline, trashBin } from "ionicons/icons";

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
  useIonToast,
} from "@ionic/react";
import { useQueryClient } from "@tanstack/react-query";

import { Task } from "../../Interfaces/ITask";
import {
  deleteTask,
  finishTask,
  startTask,
} from "../../Services/tasks.services";

interface TaskCardProps {
  id: number;
  task: Task;
  size?: "minimal" | "full";
}

const TasksCard = ({ id, task, size = "full" }: TaskCardProps) => {
  const queryClient = useQueryClient();

  const [present] = useIonToast();

  const handleDelete = async (id: number) => {
    await deleteTask(id);

    queryClient.invalidateQueries({ queryKey: ["tasks"], refetchType: "all" });

    present({
      message: `Task ${task.name} was eeted`,
      duration: 5000,
      position: "bottom",
      icon: trashBin,
      color: "success",
      buttons: [{ role: "cancel", icon: close }],
    });
  };

  const handleStart = async (id: number) => {
    await startTask(id);
    queryClient.invalidateQueries({ queryKey: ["tasks"], refetchType: "all" });
  };

  const handleFinish = async (id: number) => {
    await finishTask(id);
    queryClient.invalidateQueries({ queryKey: ["tasks"], refetchType: "all" });
  };

  return (
    <IonCard
      className="task-card"
      color={`light`}
      style={{
        borderLeft: clsx(
          !task.startDate && !task.endDate && "15px solid #00000000",
          task.startDate &&
            !task.endDate &&
            "15px solid var(--ion-color-warning)",
          task.startDate &&
            task.endDate &&
            "15px solid var(--ion-color-success)"
        ),
      }}
    >
      {size === "full" && (
        <IonButton
          color={"danger"}
          fill="clear"
          size="large"
          className="ion-float-end"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <IonIcon icon={closeOutline}></IonIcon>
        </IonButton>
      )}
      <IonCardHeader>
        <IonCardTitle>{task.name}</IonCardTitle>
      </IonCardHeader>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCardContent>{task.personalNote}</IonCardContent>
          </IonCol>
        </IonRow>
        {size === "full" && (
          <>
            <IonRow>
              <IonCol>
                <IonCardContent>
                  <IonText>
                    <h2>Start Date</h2>
                  </IonText>
                  {task.startDate ? (
                    dayjs(task.startDate).format("D.M.YYYY - HH:mm:ss")
                  ) : (
                    <p>--:--</p>
                  )}
                </IonCardContent>
              </IonCol>
              <IonCol>
                <IonCardContent>
                  <IonText>
                    <h2>End Date</h2>
                  </IonText>
                  {task.endDate ? (
                    dayjs(task.endDate).format("D.M.YYYY - HH:mm:ss")
                  ) : (
                    <p>--:--</p>
                  )}
                </IonCardContent>
              </IonCol>
              <IonCol>
                <IonCardContent>
                  <IonText>
                    <h2>Time spent on Task</h2>
                  </IonText>
                  {task.startDate && !task.endDate && (
                    <h3>
                      {dayjs
                        .duration(dayjs().diff(dayjs(task.startDate)))
                        .format("HH:mm:ss")}
                    </h3>
                  )}
                  {task.startDate && task.endDate && (
                    <h3>
                      {dayjs
                        .duration(
                          dayjs(task.endDate).diff(dayjs(task.startDate))
                        )
                        .format("HH:mm:ss")}
                    </h3>
                  )}
                </IonCardContent>
              </IonCol>
            </IonRow>
          </>
        )}
        {size === "full" && (
          <IonRow>
            <IonCardContent>
              {!task.startDate && !task.endDate && (
                <IonButton
                  color={"success"}
                  onClick={() => {
                    handleStart(id);
                  }}
                >
                  Start
                </IonButton>
              )}
              {task.startDate && !task.endDate && (
                <IonButton
                  color={"warning"}
                  onClick={() => {
                    handleFinish(id);
                  }}
                >
                  Finish
                </IonButton>
              )}
            </IonCardContent>
          </IonRow>
        )}
        {size === "minimal" && (
          <IonRow>
            <IonCol>
              <IonCardContent>
                <IonText>
                  <h1>
                    {dayjs
                      .duration(dayjs(task.endDate).diff(dayjs(task.startDate)))
                      .format("HH:mm:ss")}
                  </h1>
                </IonText>
              </IonCardContent>
            </IonCol>
          </IonRow>
        )}
      </IonGrid>
    </IonCard>
  );
};

export default TasksCard;
