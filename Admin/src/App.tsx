import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Sales from './pages/Sales';
import AddProductForm from './pages/FormAddProduct';
import Tables from './pages/Tables';
import Promosi from './pages/Promosi';
import Earnings from './pages/Earnings';
import OrderPage from './pages/OrderPage';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Admin Dashbord | Snackin" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | Snackin" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | Snackin" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | Snackin" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | Snackin" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="My Product | Snackin" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Snackin" />
              <Settings />
            </>
          }
          />
          <Route
          path="/sales"
          element={
            <>
              <PageTitle title="Sales | Snackin" />
              <Sales />
            </>
          }
          />
          <Route
          path="/OrderPage"
          element={
            <>
              <PageTitle title="Pesanan | Snackin" />
              <OrderPage />
            </>
          }
          />
          <Route
          path="/Promosi"
          element={
            <>
              <PageTitle title="Promosi Toko | Snackin" />
              <Promosi />
            </>
          }
          />
          <Route
          path="/Earnings"
          element={
            <>
              <PageTitle title="Penghasilan | Snackin" />
              <Earnings />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Snackin" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Snackin" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Snackin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Snackin" />
              <SignUp />
            </>
          }
          />
          <Route
          path="/pages/FormAddProduct"
          element={
            <>
              <PageTitle title="Add Product | Snackin" />
              <AddProductForm />
            </>
          }
          />
      </Routes>
    </>
  );
}

export default App;
