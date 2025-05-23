import React, { useState, useContext } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonTextarea, IonButton, IonText
} from '@ionic/react';
import { PlanContext } from '../contexts/PlanContext';
import PlanContainer from '../components/PlanContainer';

const Home: React.FC = () => {
  const { plan, loading, error, generatePlan } = useContext(PlanContext);
  const [input, setInput] = useState('');

  const onSubmit = () => {
    const lines = input.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    generatePlan(lines);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lifestyle Planner</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonTextarea
          rows={4}
          placeholder="Enter one objective per line"
          value={input}
          onIonChange={e => setInput(e.detail.value || '')}
        />
        <IonButton expand="full" onClick={onSubmit} disabled={loading || !input.trim()}>
          {loading ? 'Generating...' : 'Generate Plan'}
        </IonButton>
        {error && <IonText color="danger">{error}</IonText>}

        {plan && <PlanContainer />}
      </IonContent>
    </IonPage>
  );
};

export default Home;