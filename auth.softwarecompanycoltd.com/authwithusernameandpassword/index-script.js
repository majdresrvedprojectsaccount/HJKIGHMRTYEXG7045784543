
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, useNavigate, Outlet } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://vkuobgbdzflrimryeegg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrdW9iZ2JkemZscmltcnllZWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNjQwMjUsImV4cCI6MjA1MTg0MDAyNX0.FSNw34p1niPsBXp3pRkw13d0KoOaRA7-B8c08Mm2MXo');

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session && isMounted) navigate('/signin');
      if (isMounted) setLoading(false);
    };
    checkAuth();
    return () => setIsMounted(false);
  }, [navigate, isMounted]);

  if (loading) return <div>Loading...</div>;
  return <Outlet />;
};

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert('Sign up successful!');
      navigate('/signin');
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h1>Sign Up</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <h1>Sign In</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Sign In</button>
    </form>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/signin');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

const router = createBrowserRouter([
  { path: '/signup', element: <SignUp /> },
  { path: '/signin', element: <SignIn /> },
  { path: '/dashboard', element: <ProtectedRoute />, children: [{ index: true, element: <Dashboard /> }] },
  { path: '*', element: <Navigate to="/signin" /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
