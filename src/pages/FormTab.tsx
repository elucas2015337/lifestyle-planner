import React, { useState, useContext } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonRadioGroup,
  IonRadio,
  IonButton,
  IonTextarea,
  IonSpinner
} from '@ionic/react';
import { PlanContext } from '../contexts/PlanContext';

const FormTab: React.FC = () => {
  const { generatePlan, loading } = useContext(PlanContext);
  const [goal, setGoal] = useState<'gain' | 'loss' | 'maintenance'>('gain');
  const [description, setDescription] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [weeks, setWeeks] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');

  const handleSubmit = () => {
    const lines = [
      `Goal: ${goal}`,
      `About routine: ${description}`,
      `Target Weight: ${targetWeight}kg over ${weeks} weeks`,
      `Profile: ${height}cm, ${weight}kg, ${age}y, ${gender}`
    ];
    generatePlan(lines);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Setup Your Plan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">What's your goal?</IonLabel>
          <IonSelect value={goal} onIonChange={e => setGoal(e.detail.value!)}>
            <IonSelectOption value="gain">Weight Gain</IonSelectOption>
            <IonSelectOption value="loss">Weight Loss</IonSelectOption>
            <IonSelectOption value="maintenance">Maintenance</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Tell me about you and your current routine, preferences in food, etc.</IonLabel>
          <IonTextarea
            rows={4}
            value={description}
            onIonChange={e => setDescription(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Current Weight (kg)</IonLabel>
          <IonInput
            type="number"
            value={weight}
            onIonChange={e => setWeight(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target Weight (kg)</IonLabel>
          <IonInput
            type="number"
            value={targetWeight}
            onIonChange={e => setTargetWeight(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Number of Weeks</IonLabel>
          <IonInput
            type="number"
            value={weeks}
            onIonChange={e => setWeeks(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Height (cm)</IonLabel>
          <IonInput
            type="number"
            value={height}
            onIonChange={e => setHeight(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Age</IonLabel>
          <IonInput
            type="number"
            value={age}
            onIonChange={e => setAge(e.detail.value!)}
          />
        </IonItem>
        <IonRadioGroup value={gender} onIonChange={e => setGender(e.detail.value)}>
          <IonItem>
            <IonLabel>Male</IonLabel>
            <IonRadio slot="start" value="male" />
          </IonItem>
          <IonItem>
            <IonLabel>Female</IonLabel>
            <IonRadio slot="start" value="female" />
          </IonItem>
        </IonRadioGroup>
        <IonButton
          expand="full"
          onClick={handleSubmit}
          disabled={loading}
          style={{ marginTop: '1rem' }}
        >
          {loading
            ? <><IonSpinner slot="start" />Generating...</>
            : 'Generate Plan'
          }
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FormTab;