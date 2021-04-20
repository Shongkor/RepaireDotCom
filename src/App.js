import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import AddService from "./Pages/Admin/AddServices/AddServices";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import Order from "./Pages/Dashboard/Order/Order";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import OrderList from "./Pages/Dashboard/OrdersList/OrdersList";
import AdminOrderList from "./Pages/Admin/AdminOrderList/AdminOrderList";
import Admin from "./Pages/Admin/Admin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Admin/MakeAdmin/MakeAdmin";
import Service from "./Pages/Home/Services/Services";
import Reviews from "./Pages/Home/Reviews/Reviews";
import Book from "./Pages/Dashboard/Book/Book";
import WhyChoseUs from "./Pages/Home/WhyChoseUs/WhyChoseUs";
import Payment from "./Pages/Dashboard/Order/Payment/Payment";



export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Service></Service>
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
          <Route path='/addService'>
            <AddService></AddService>
          </Route>
          <Route path="/addAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/serviceList'>
            <Book></Book>
          </Route>
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
      </Router>
    </UserContext.Provider>
  );
}

export default App;
