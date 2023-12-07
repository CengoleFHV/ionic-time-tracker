import { IonCol, IonGrid, IonRow } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol className="ion-text-center">1</IonCol>
        <IonCol className="ion-text-center">2</IonCol>
        <IonCol className="ion-text-center">3</IonCol>
        <IonCol className="ion-text-center">4</IonCol>
        <IonCol className="ion-text-center">5</IonCol>
        <IonCol className="ion-text-center">6</IonCol>
        <IonCol className="ion-text-center">7</IonCol>
        <IonCol className="ion-text-center">8</IonCol>
        <IonCol className="ion-text-center">9</IonCol>
        <IonCol className="ion-text-center">10</IonCol>
        <IonCol className="ion-text-center">11</IonCol>
        <IonCol className="ion-text-center">12</IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ExploreContainer;
