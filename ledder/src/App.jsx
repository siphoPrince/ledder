import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Hero from '../app/hero';
import OverView from '../app/components/statsoverview';
import ApplicationForm from '../app/components/application-form';
import Login from '../app/login/login';
import Register from '../app/register/register';
import DashBoard from '../app/pages/dashboard';
import EditForm from '../app/pages/EditForm';
import PrivateRoute from '../app/routes/PrivateRoute';


function App() {
  const [applications, setApplications] = useState([]);
  const AddApplication = (app) => setApplications((prev) => [...prev, app]);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <div className="w-full px-4">
                <section className="mt-6">
                  <Hero />
                </section>
                <section className="mt-10">
                  <OverView applications={applications} />
                </section>
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/application-form"
          element={
            <PrivateRoute>
              <ApplicationForm onSubmit={AddApplication} />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
