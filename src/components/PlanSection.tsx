import React, { useState, useContext } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonTextarea,
  IonText,
  IonSpinner
} from '@ionic/react';
import { PlanContext } from '../contexts/PlanContext';
import { PlanResponse } from '../types/plan';

interface Props {
  sectionKey: keyof PlanResponse;
  title: string;
  content: string;
}

const PlanSection: React.FC<Props> = ({ sectionKey, title, content }) => {
  const { regenerateSection, sendFeedback } = useContext(PlanContext);
  const [feedback, setFeedback] = useState('');
  const [sectionLoading, setSectionLoading] = useState(false);

  const handleRegenerate = async () => {
    setSectionLoading(true);
    await regenerateSection(sectionKey);
    setSectionLoading(false);
  };

  const handleSend = async () => {
    setSectionLoading(true);
    await sendFeedback(sectionKey, feedback);
    setFeedback('');
    setSectionLoading(false);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          {content}
        </pre>

        <IonButton
          expand="block"
          onClick={handleRegenerate}
          disabled={sectionLoading}
        >
          {sectionLoading ? (
            <>
              <IonSpinner slot="start" />
              Regenerating...
            </>
          ) : (
            'Regenerate'
          )}
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