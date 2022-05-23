import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';
import Login from './Pages/Login';
import PrivateRoute from './Shared/PrivateRoute';
import Purchase from './Pages/Purchase';
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className='lg:px-20'>
      <Navbar></Navbar>
      <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/purchase/:id' element={<PrivateRoute><Purchase></Purchase></PrivateRoute>}></Route>
      <Route path='/dashboard' element={<PrivateRoute><Dashboard>
        </Dashboard></PrivateRoute>}>
          <Route index  element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
