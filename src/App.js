import React, { createContext, lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const Home = lazy(() => import('./Pages/Home/Home'));
const ServicesPage = lazy(() => import('./Pages/Dashboard/ServicesPage/ServicesPage.js'));
const Reviews = lazy(() => import('./Pages/Home/Reviews/Reviews'));
const AddReview = lazy(() => import('./Pages/Dashboard/AddReview/AddReview'));
const WhyChoseUs = lazy(() => import('./Pages/Home/WhyChoseUs/WhyChoseUs'));
const LogIn = lazy(() => import('./Pages/LogIn/LogIn'));
const SignUp = lazy(() => import('./Pages/SignUp/SignUp'));
const PrivateRoute = lazy(() => import('./Components/PrivateRoute/PrivateRoute'));
const Dashboard = lazy(() => import('./Pages/Dashboard/Dashboard'));
const Order = lazy(() => import('./Pages/Dashboard/Order/Order'));
const Book = lazy(() => import('./Pages/Dashboard/Book/Book'));
const OrderList = lazy(() => import('./Pages/Dashboard/OrdersList/OrdersList'));
const Payment = lazy(() => import('./Pages/Dashboard/Order/Payment/Payment'));
const Admin = lazy(() => import('./Pages/Admin/Admin'));
const AdminOrderList = lazy(() => import('./Pages/Admin/AdminOrderList/AdminOrderList'));
const MakeAdmin = lazy(() => import('./Pages/Admin/MakeAdmin/MakeAdmin'));
const AddService = lazy(() => import('./Pages/Admin/AddServices/AddServices'));








export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <ServicesPage></ServicesPage>
            </Route>
            <Route path='/reviews'>
              <Reviews></Reviews>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/admin/orderList">
              <AdminOrderList></AdminOrderList>
            </PrivateRoute>
            <PrivateRoute path='/addService'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/addAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/serviceList'>
              <Book></Book>
            </Route>
            <PrivateRoute path='/review'>
              <AddReview></AddReview>
            </PrivateRoute>
            <Route path='/whyChoseUs'>
              <WhyChoseUs></WhyChoseUs>
            </Route>
            <Route path="/Login">
              <LogIn></LogIn>
            </Route>
            <Route path="/sign-up">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/checkOut">
              <Payment></Payment>
            </PrivateRoute>



            <PrivateRoute path="/order/:id">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/orderList">
              <OrderList></OrderList>
            </PrivateRoute>

            <Route exact path='/'>
              <Home></Home>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
