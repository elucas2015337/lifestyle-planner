import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { PlanContext } from '../contexts/PlanContext';
import PlanSection from '../components/PlanSection';

const WorkoutTab: React.FC = () => {
  const { plan } = useContext(PlanContext);
  if (!plan) return <Redirect to="/form" />;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Workout Plan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <PlanSection
          sectionKey="workout"
          title="Workout Plan"
          content={plan.workout}
        />
      </IonContent>
    </IonPage>
  );
};

export default WorkoutTab;