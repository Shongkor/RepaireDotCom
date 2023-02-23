import React, { createContext, lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeNavbar from "./Components/HomeNavbar/HomeNavbar";
import Footer from "./Pages/Home/Footer/Footer";
const Home = lazy(() => import('./Pages/Home/Home'));
const ServicesPage = lazy(() => import('./Pages/Dashboard/ServicesPage/ServicesPage.js'));
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 21dc79c804d487aa6a7a9fb6bfaa9f9958ca894e
const ReviewPage = lazy(() => import('./Pages/ReviewPage/ReviewPage'));
const AddReview = lazy(() => import('./Pages/Dashboard/AddReview/AddReview'));
const WhyChoseUs = lazy(() => import('./Pages/Home/WhyChoseUs/WhyChoseUs'));
const LogIn = lazy(() => import('./Pages/LogIn/LogIn'));
const SignUp = lazy(() => import('./Pages/SignUp/SignUp'));
=======
const Reviews = lazy(() => import('./Pages/Home/Reviews/Reviews'));
const AddReview = lazy(() => import('./Pages/Dashboard/AddReview/AddReview'));
const WhyChoseUs = lazy(() => import('./Pages/Home/WhyChoseUs/WhyChoseUs'));
const LogIn = lazy(() => import('./Pages/LogIn/LogIn'));
>>>>>>> fcfd1f23770bbe33ebf092fce8e0c8814a5d7896
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
          <HomeNavbar />
          <Switch>
            
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <ServicesPage></ServicesPage>
            </Route>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            <Route path='/reviews'>
              <Reviews></Reviews>
            </Route>
>>>>>>> fcfd1f23770bbe33ebf092fce8e0c8814a5d7896
>>>>>>> 21dc79c804d487aa6a7a9fb6bfaa9f9958ca894e
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/admin/orderList">
              <AdminOrderList></AdminOrderList>
            </PrivateRoute>
<<<<<<< HEAD
            <PrivateRoute path='/addService'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/addAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
=======
            <Route path='/addService'>
              <AddService></AddService>
            </Route>
            <Route path="/addAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
>>>>>>> fcfd1f23770bbe33ebf092fce8e0c8814a5d7896

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/serviceList'>
              <Book></Book>
            </Route>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 21dc79c804d487aa6a7a9fb6bfaa9f9958ca894e
            <PrivateRoute path='/add-review'>
              <AddReview></AddReview>
            </PrivateRoute>
            <Route path='/whyChoseUs'>
              <WhyChoseUs></WhyChoseUs>
            </Route>
            <Route path='/reviews'>
              <ReviewPage></ReviewPage>
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
=======
            <Route path='/review'>
              <AddReview></AddReview>
            </Route>
            <Route path='/whyChoseUs'>
              <WhyChoseUs></WhyChoseUs>
            </Route>
            <Route path="/Login">
              <LogIn></LogIn>
            </Route>
            <Route path="/checkOut">
              <Payment></Payment>
            </Route>
>>>>>>> fcfd1f23770bbe33ebf092fce8e0c8814a5d7896



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
          <Footer />
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
