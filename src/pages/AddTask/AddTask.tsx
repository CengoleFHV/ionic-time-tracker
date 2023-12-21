import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import AddTaskForm from "../../components/Forms/Task/AddTaskForm";

const AddTask: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref=".."></IonBackButton>
            <IonTitle>Add New Task</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref=".."></IonBackButton>
            </IonButtons>
            <IonTitle>Add New Task</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AddTaskForm />
      </IonContent>
    </IonPage>
  );
};

export default AddTask;
