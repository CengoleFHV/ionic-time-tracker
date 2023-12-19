/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
/* Theme variables */
import "./theme/variables.css";
import "dayjs/plugin/isToday";

import dayjs from "dayjs";
import Duration from "dayjs/plugin/Duration";
import isToday from "dayjs/plugin/isToday";
import { Redirect, Route, Switch } from "react-router-dom";

import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Add from "./pages/Add/Add";
import Home from "./pages/Home/Home";

dayjs.extend(isToday);
dayjs.extend(Duration);

setupIonicReact();

const queryClient = new QueryClient();

const App: React.FC = () => (
  <IonApp>
    <QueryClientProvider client={queryClient}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/add" component={Add}></Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
      <ReactQueryDevtools
        initialIsOpen={false}
        position={"bottom"}
        buttonPosition={"bottom-left"}
      />
    </QueryClientProvider>
  </IonApp>
);

export default App;
