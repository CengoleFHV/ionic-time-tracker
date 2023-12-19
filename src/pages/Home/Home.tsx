import { addOutline } from "ionicons/icons";

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

import TimeTrackDashboard from "../../components/TimeTrackDashboard/TimeTrackDashboard";

const Home: React.FC = () => {
  // useEffect(() => {
  //   init().then(() => {
  //     let encrypted = encrypt("Cengole");
  //     console.log("encrypted ", encrypted);

  //     console.log("decrypted ", decrypt(encrypted));
  //   });
  // }, []);

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
