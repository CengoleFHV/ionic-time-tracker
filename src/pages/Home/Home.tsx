import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import TimeTrackDashboard from "../../components/TimeTrackDashboard/TimeTrackDashboard";
import { addOutline } from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Time Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Time Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TimeTrackDashboard />
        <IonFab
          slot="fixed"
          vertical="bottom"
          horizontal="end"
          className="ion-padding"
        >
          <IonFabButton routerLink="/add">
            <IonIcon size="large" icon={addOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
export default Home;
