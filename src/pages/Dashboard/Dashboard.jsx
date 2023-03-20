import React from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "./AdminDashboard/AdminDahboard";
import BasicDashboard from "./BasicDashboard/BasicDashboard";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return user.phone === "+923024042683" ? (
    <AdminDashboard />
  ) : (
    <BasicDashboard />
  );
};

export default Dashboard;
