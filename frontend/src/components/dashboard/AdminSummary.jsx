import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,ArcElement,PointElement,LineElement,} from "chart.js";
import List from '../employee/List';

// Registering the required chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
  // Dummy data for the cards and charts
  const totalEmployees = 100;
  const newEmployeesThisMonth = 10;
  const totalTasks = 150;
  const presentEmployeesToday = 95;
  const employeeOfTheMonth = "John Doe"; // Best KPI employee

  // Department-wise employee distribution chart data
  const departmentData = {
    labels: ["HR", "Engineering", "Marketing", "Sales", "Finance"],
    datasets: [
      {
        data: [30, 40, 10, 15, 5],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        hoverOffset: 4,
      },
    ],
  };

  // Daily task completion chart data
  const taskCompletionData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [10, 25, 40, 20, 15],
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  // KPI values of employees chart data
  const kpiData = {
    labels: ["Alice", "Bob", "Charlie", "David", "John Doe"],
    datasets: [
      {
        label: "KPI Score",
        data: [85, 90, 70, 80, 95],
        borderColor: "#4BC0C0",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Box
      className="p-4"
      style={{
        backgroundColor: "#f4f4f4", // Gray background color for the page
        minHeight: "100vh", // Ensures the body fills the full height of the screen
      }}
    >
      {/* Welcome Card */}
      <Card
        className="mb-6 p-6 bg-gradient-to-r from-red-800 via-orange-900 to-yellow-200 text-white shadow-lg"
        style={{ background: "linear-gradient(to left, #f44336, #ff9800, #ffeb3b)" }}
      >
        <CardContent>
          <Typography variant="h4" component="div" className="font-bold text-5xl">
            System Admin Dashboard
          </Typography>
          <Typography variant="h4" component="div" className="font-bold text-5xl mt-2">
            TrackPro!
          </Typography>
          <Typography variant="body2" component="div" className="font-normal text-lg text-gray-600 mt-4">
            Welcome to TrackPro! Employee Performance Monitoring tool.
          </Typography>
          <Link
            to="/admin-dashboard/add-employee"
            className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded text-white mt-4 inline-block"
          >
            Add New Employee
          </Link>
        </CardContent>
      </Card>

      {/* Dashboard Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-4 shadow-md bg-blue-50 h-full">
            <CardContent className="text-center">
              <Typography variant="h6" component="div" className="font-bold text-lg">
                Total Employees
              </Typography>
              <Typography variant="h4" className="font-semibold text-4xl">
                {totalEmployees}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-4 shadow-md bg-yellow-50 h-full">
            <CardContent className="text-center">
              <Typography variant="h6" component="div" className="font-bold text-lg">
                New Employees This Month
              </Typography>
              <Typography variant="h4" className="font-semibold text-4xl">
                {newEmployeesThisMonth}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-4 shadow-md bg-green-50 h-full">
            <CardContent className="text-center">
              <Typography variant="h6" component="div" className="font-bold text-lg">
                Total Tasks
              </Typography>
              <Typography variant="h4" className="font-semibold text-4xl">
                {totalTasks}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-4 shadow-md bg-purple-50 h-full">
            <CardContent className="text-center">
              <Typography variant="h6" component="div" className="font-bold text-lg">
                Present Employees Today
              </Typography>
              <Typography variant="h4" className="font-semibold text-4xl">
                {presentEmployeesToday}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Task Completion and Employees KPI charts */}
      <Grid container spacing={4} style={{ marginTop: "15px" }}>
        <Grid item xs={12} sm={6} md={6}>
          <Card className="p-6 shadow-md bg-white h-full" style={{ height: "100%" }}>
            <CardContent style={{ padding: 0, height: "100%" }}>
              <Typography variant="h6" component="div" className="font-bold text-lg">
                Tasks Completed Daily
              </Typography>
              <Line data={taskCompletionData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card className="p-6 shadow-md bg-white h-full" style={{ height: "100%" }}>
            <CardContent style={{ padding: 0, height: "100%" }}>
              <Typography variant="h6" component="div" className="font-bold text-lg">
                Employees KPI
              </Typography>
              <Bar data={kpiData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Employee of the Month, New Card, and Graph in the same row */}
      <Grid container spacing={4} style={{ marginTop: "15px" }}>
        <Grid item xs={12} sm={6} md={4}>
          {/* Employee of the Month Card */}
          <Card className="mb-6 p-6 bg-yellow-300 shadow-lg" style={{ height: "150px" }}>
            <CardContent>
              <Typography variant="h5" component="div" className="font-semibold">
                Employee of the Month: {employeeOfTheMonth}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          {/* New Card Below Employee of the Month */}
          <Card className="mb-6 p-6 shadow-md bg-blue-50" style={{ height: "150px" }}>
            <CardContent className="text-center">
              <Typography variant="h6" component="div" className="font-bold text-lg">
                New Card Below Employee of the Month
              </Typography>
              <Typography variant="h4" className="font-semibold text-4xl">
                Some Content Here
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Employee List Section */}
          <Grid container spacing={4} style={{ marginTop: "15px" }}>
            <Card className="mb-6 p-6 shadow-md bg-blue-50" style={{ height: "350px" }}>
              <Grid item xs={12}>
                <List /> {/* Include the Employee List here */}
              </Grid>
            </Card> 
          </Grid>
        

        <Grid item xs={12} sm={6} md={4}>
          {/* Graph: Employees by Department */}
          <Card className="mb-6 p-6 shadow-md bg-white" style={{ height: "400px" }}>
            <CardContent>
              <Typography variant="h6" component="div" className="font-bold text-lg">
                Employees by Department
              </Typography>
              <div style={{ height: "350px" }}> {/* Increased height for graph */}
                <Doughnut
                  data={departmentData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                    },
                  }}
                />
              </div>
            </CardContent>
          </Card>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
