import { RouteComponentProps } from "react-router";

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import EditTaskForm from "../../components/Forms/Task/EditTaskForm";

interface EditTasksProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const EditTask: React.FC<EditTasksProps> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref=".."></IonBackButton>
            <IonTitle>Edit Task</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref=".."></IonBackButton>
            </IonButtons>
            <IonTitle>Edit Task</IonTitle>
          </IonToolbar>
        </IonHeader>
        <EditTaskForm id={match.params.id} />
      </IonContent>
    </IonPage>
  );
};

export default EditTask;
