import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export default function IsLoggedIn({ pathToRedirect }) {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) return <h1>Loading...</h1>;

  return currentUser ? <Navigate to={pathToRedirect} replace /> : <Outlet />;
}
