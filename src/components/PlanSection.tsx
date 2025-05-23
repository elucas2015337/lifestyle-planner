import React, { useState, useContext } from 'react';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonButton, IonTextarea, IonText
} from '@ionic/react';
import { PlanContext } from '../contexts/PlanContext';
import { PlanResponse } from '../types/plan';

interface Props {
  sectionKey: keyof PlanResponse;
  title: string;
  content: any;
}

const PlanSection: React.FC<Props> = ({ sectionKey, title, content }) => {
  const { regenerateSection, sendFeedback } = useContext(PlanContext);
  const [feedback, setFeedback] = useState('');

  const handleRegenerate = () => regenerateSection(sectionKey);
  const handleSend = () => {
    sendFeedback(sectionKey, feedback);
    setFeedback('');
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          {typeof content === 'object' ? JSON.stringify(content, null, 2) : content}
        </pre>

        <IonButton expand="block" onClick={handleRegenerate}>
          Regenerate
        </IonButton>

        <IonTextarea
          rows={2}
          placeholder="Feedback..."
          value={feedback}
          onIonChange={e => setFeedback(e.detail.value || '')}
        />
        <IonButton
          expand="block"
          onClick={handleSend}
          disabled={!feedback.trim()}
        >
          Send Feedback
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default PlanSection;