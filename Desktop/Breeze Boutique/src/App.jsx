// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminRegister from './components/AdminRegister';
import AdminSignIn from './components/AdminSignIn';
import UserRegister from './components/UserRegister';
import UserSignIn from './components/UserSignIn';
import { ToastContainer } from 'react-toastify';
import AdminDashboard from './components/AdminDashboard';
import AddAccommodation from './components/AddAccommodation';
import ViewManageAccommodations from './components/ViewManageAccommodations';
import EditAccommodation from './components/EditAccommodations';
import AccommodationsList from './components/AccommodationList';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import AccommodationDetails from './components/AccommodationDetails';
import Cart from './components/Cart';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-blue-600 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">App Name</h1>
            <ul className="flex space-x-4">
              {/* Admin Links */}

              <li>
                <Link to="/" className="hover:text-gray-200">Home</Link>
              </li>
              <li>
                <Link to="/admin/register" className="hover:text-gray-200">Admin Register</Link>
              </li>
              <li>
                <Link to="/admin/signin" className="hover:text-gray-200">Admin Sign In</Link>
              </li>
              {/* User Links */}
              <li>
                <Link to="/user/register" className="hover:text-gray-200">User Register</Link>
              </li>
              <li>
                <Link to="/user/signin" className="hover:text-gray-200">User Sign In</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-gray-200">About</Link>
              </li>
             

            </ul>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          {/* Admin Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/signin" element={<AdminSignIn />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-dashboard/add-accommodation" element={<AddAccommodation />} />
          <Route path="/view-manage-accommodations" element={<ViewManageAccommodations/>} />
          <Route path="/edit-accommodation/:id" element={<EditAccommodation/>} />
          <Route path="/accommodation-details" element={<AccommodationDetails />} />
          <Route path="/accommodation/:id" element={<AccommodationDetails />} />
          <Route path="/accommodations" element={<AccommodationsList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />




          {/* User Routes */}
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/signin" element={<UserSignIn />} />


          <Route path="/about-us" element={<AboutUs />} />
            
          
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
  );
}

export default App;
