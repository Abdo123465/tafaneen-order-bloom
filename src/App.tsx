/* Floating mobile login button added.
   Appears only on small screens (md:hidden), fixed at bottom-right,
   links to /login.
*/
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Confirm from './pages/Confirm';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Mobile floating Login button */}
      <Link
        to="/login"
        className="fixed bottom-20 right-4 z-50 md:hidden inline-flex items-center gap-2 rounded-full px-4 py-3 shadow-lg text-white"
        style={{
          background: 'linear-gradient(90deg, #d32f2f 0%, #b71c1c 100%)',
        }}
      >
        {/* lock icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M12 1.5a4.5 4.5 0 00-4.5 4.5v3H6a2.25 2.25 0 00-2.25 2.25v7.5A2.25 2.25 0 006 21h12a2.25 2.25 0 002.25-2.25v-7.5A2.25 2.25 0 0018 9H16.5V6A4.5 4.5 0 0012 1.5zm3 7.5V6a3 3 0 10-6 0v3h6zm-3 4.5a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 003 0V15A1.5 1.5 0 0012 13.5z"
            clipRule="evenodd"
          />
        </svg>
        <span>تسجيل الدخول</span>
      </Link>
    </BrowserRouter>
  );
}

export default App;
