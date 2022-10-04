import { ReactNode } from "react";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { v4 as uuid } from "uuid"

import Signup from './Signup/index'
import { ROOT_ROUTE, PROFILE_ROUTE, LOGIN_ROUTE, DASHBOARD_ROUTE } from "../utils/routeConstants"
import Login from "./Login";
import DashBoard from "./DashBoard";

const routesConfig = [
  {
    path: ROOT_ROUTE,
    component: <Signup />,
    exact: true,
    privateRoute: false,
  },
  {
    path: LOGIN_ROUTE,
    component: <Login />,
    exact: true,
    privateRoute: false,
  },
  {
    path: DASHBOARD_ROUTE,
    component: <DashBoard />,
    exact: true,
    privateRoute: true,
  },
]
const App = ()=>{


  // const AppRoute = () => {
  //   let routes = useRoutes([
  //     { path: ROOT_ROUTE, element: (!localStorage.getItem("isLogged"))?<Signup/>:<Navigate to={PROFILE_ROUTE}/> },
  //     { path: PROFILE_ROUTE, element: (localStorage.getItem("isLogged"))?<Profile/>:<Navigate to={ROOT_ROUTE}/> },
  //   ]);
  //   return routes;
  // };

  const protectedRoute = (component: ReactNode, privateRoute: boolean) => {
    const isUserLogged = localStorage.getItem("authToken");
    const isValidRoute =
      (privateRoute && isUserLogged) || !(privateRoute || isUserLogged);
      
    if (isValidRoute)
      return component
    return <Navigate to={privateRoute ? ROOT_ROUTE : DASHBOARD_ROUTE} />
  }


  return (
    <div className="App">
      <Router>
        <Routes>
          {routesConfig.map((route) => {
            let obj = { ...route }
            return (
              <Route
                key={uuid()}
                path={obj.path}
                element={protectedRoute(obj.component, obj.privateRoute)}
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}

{/* <AppRoute/> */ }

export default App;
