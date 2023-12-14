import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import AddTaskForm from "../../components/Forms/AddTask/AddTaskForm";

const Add: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref=".."></IonBackButton>
            <IonTitle>Time Tracker: Add</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Time Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AddTaskForm />
      </IonContent>
    </IonPage>
  );
};

export default Add;
