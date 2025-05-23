import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { PlanContext } from '../contexts/PlanContext';
import PlanSection from '../components/PlanSection';

const NutritionTab: React.FC = () => {
  const { plan } = useContext(PlanContext);
  if (!plan) return <Redirect to="/form" />;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nutrition Plan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <PlanSection
          sectionKey="nutrition"
          title="Nutrition Plan"
          content={plan.nutrition}
        />
      </IonContent>
    </IonPage>
  );
};

export default NutritionTab;