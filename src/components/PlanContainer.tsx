import React, { useContext } from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { PlanContext } from '../contexts/PlanContext';
import PlanSection from './PlanSection';

const PlanContainer: React.FC = () => {
  const { plan } = useContext(PlanContext);
  if (!plan) return null;

  return (
    <IonGrid>
      <IonRow>
        <IonCol size="12" size-md="6">
          <PlanSection sectionKey="professional" title="Professional Plan" content={plan.professional} />
        </IonCol>
        <IonCol size="12" size-md="6">
          <PlanSection sectionKey="workout" title="Workout Plan" content={plan.workout} />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="12" size-md="6">
          <PlanSection sectionKey="hobby" title="Hobby Plan" content={plan.hobby} />
        </IonCol>
        <IonCol size="12" size-md="6">
          <PlanSection sectionKey="nutrition" title="Nutrition Plan" content={plan.nutrition} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default PlanContainer;