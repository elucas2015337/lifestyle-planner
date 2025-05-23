import React from 'react';
import {
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, briefcase, fitness, brush, fastFood } from 'ionicons/icons';

import { PlanProvider } from './contexts/PlanContext';
import FormTab from './pages/FormTab';
import ProfessionalTab from './pages/ProfessionalTab';
import WorkoutTab from './pages/WorkoutTab';
import HobbyTab from './pages/HobbyTab';
import NutritionTab from './pages/NutritionTab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

import './theme/variables.css';
import { Redirect, Route } from 'react-router';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <PlanProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/form" component={FormTab} />
            <Route exact path="/professional" component={ProfessionalTab} />
            <Route exact path="/workout" component={WorkoutTab} />
            <Route exact path="/hobby" component={HobbyTab} />
            <Route exact path="/nutrition" component={NutritionTab} />
            <Route render={() => <Redirect to="/form" />} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="form" href="/form">
              <IonIcon icon={home} />
              <IonLabel>Setup</IonLabel>
            </IonTabButton>
            <IonTabButton tab="professional" href="/professional">
              <IonIcon icon={briefcase} />
              <IonLabel>Professional</IonLabel>
            </IonTabButton>
            <IonTabButton tab="workout" href="/workout">
              <IonIcon icon={fitness} />
              <IonLabel>Workout</IonLabel>
            </IonTabButton>
            <IonTabButton tab="hobby" href="/hobby">
              <IonIcon icon={brush} />
              <IonLabel>Hobby</IonLabel>
            </IonTabButton>
            <IonTabButton tab="nutrition" href="/nutrition">
              <IonIcon icon={fastFood} />
              <IonLabel>Nutrition</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </PlanProvider>
  </IonApp>
);

export default App;