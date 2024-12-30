// import axios from "axios";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Add =() => {
//     //const[formData, setFormData] = useState({})
//     const Navigate = useNavigate()
//     const handleChange = (e) => {
//         const {name, value, files} = e.target
//         if(name === "image"){
//             setFormData((prevData) => ({...prevData, [name] : files[0]}))
//         } else {
//             setFormData((prevData) => ({...prevData, [name] : value}))
//         }
//     }
//     const handleSubmit = async (e) =>{
//         e.preventDefault()
//         const formDataObj = new FormData()
//         Object.keys(formData).forEach((key) => {
//             formDataObj.append(key,formData[key])
//         })
//         try{
//             const response = await axios.post('http://localhost:5000/api/employee/add', formDataObj,
//                 {
//                     headers:{
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     },
//                 }
//             );
//             if (response.data.success){
//                 Navigate("/admin-dashboard/employee");
//             }
//         } catch (error){
//             if (error.response && !error.response.data.success){
//                 alert(error.response.data.error);
//             }
//         }
//     }
//     return(
//         <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
//             <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                         <label className="block text-sm font-medium text-gray-700">Employee ID</label>
//                         <input type="text" name="ID" onChange={handleChange} placeholder="Insert ID" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required/>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Name</label>
//                         <input type="text" name="name" onChange={handleChange} placeholder="Insert Name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required/>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Email</label>
//                         <input type="text" name="email" onChange={handleChange} placeholder="Insert Email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required/>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
//                         <input type="date" name="DOB" onChange={handleChange} placeholder="Insert DOB" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required/>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Gender</label>
//                         <select name="gender" onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                             <option value="preferNotToSay">Prefer Not to Say</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Department</label>
//                         <select name="department" onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required>
//                             <option value="it">IT</option>
//                             <option value="dept2">Dept2</option>
//                             <option value="dept3">Dept3</option>
//                             <option value="dept4">Dept4</option>
//                             <option value="dept5">Dept5</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Marital Status</label>
//                         <select name="maritalStatus" onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required>
//                             <option value="male">Single</option>
//                             <option value="female">Married</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Designation</label>
//                         <select name="designation" onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required>
//                             <option value="intern">Internee</option>
//                             <option value="executive">Executive</option>
//                             <option value="manager">Manager</option>
//                             <option value="tl">Team Lead</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Salary</label>
//                         <input type="number" name="salary" onChange={handleChange} placeholder="Insert Salary" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required/>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Password</label>
//                         <input type="password" name="password" onChange={handleChange} placeholder="******" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required/>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Role</label>
//                         <select name="role" onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required>
//                             <option value="admin">Admin</option>
//                             <option value="employee">Employee</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                         <input type="number" name="phoneNo" onChange={handleChange} placeholder="123456" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required/>

//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Upload Image</label>
//                         <input type="file" name="image" onChange={handleChange} placeholder="Uplaod Image" accept="image/*" className="mt-1 p-2 block w-full border border-gray-300 rounded-md"/>
//                     </div>
//                     <button type="submit" className="w-full mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
//                         Add Employee
//                     </button>
//                 </div>    
//             </form>
//         </div>
//     )
// }
// export default Add



import React, { useState } from "react";
import { TextField, Button, Grid, Typography, LinearProgress } from "@mui/material";

const EmployeeForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    employmentDetails: {},
    compensation: {},
    performance: {},
    login: {},
    miscellaneous: {},
  });

  const handleInputChange = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], ...data },
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const Step1 = () => (
    <div>
      <Typography variant="h6" gutterBottom>Step 1: Personal Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Full Name"
            variant="outlined"
            name="fullname"
            fullWidth
            value={formData.personalInfo.fullName || ""}
            onChange={(e) =>
              handleInputChange("personalInfo", { fullName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Date of Birth"
            type="date"
            variant="outlined"
            name="dob"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.personalInfo.dob || ""}
            onChange={(e) =>
              handleInputChange("personalInfo", { dob: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Gender"
            variant="outlined"
            name="gender"
            fullWidth
            select
            value={formData.personalInfo.gender || ""}
            onChange={(e) =>
              handleInputChange("personalInfo", { gender: e.target.value })
            }
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            variant="outlined"
            name="phoneno"
            fullWidth
            value={formData.personalInfo.phone || ""}
            onChange={(e) =>
              handleInputChange("personalInfo", { phone: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            fullWidth
            value={formData.personalInfo.email || ""}
            onChange={(e) =>
              handleInputChange("personalInfo", { email: e.target.value })
            }
          />
        </Grid>
      </Grid>
    </div>
  );

  const Step2 = () => (
    <div>
      <Typography variant="h6" gutterBottom>Step 2: Employment Details and Compensation</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Employee ID"
            variant="outlined"
            name="ID"
            fullWidth
            value={formData.employmentDetails.employeeID || ""}
            onChange={(e) =>
              handleInputChange("employmentDetails", { employeeID: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Department"
            variant="outlined"
            name="dept"
            fullWidth
            value={formData.employmentDetails.department || ""}
            onChange={(e) =>
              handleInputChange("employmentDetails", { department: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Designation"
            variant="outlined"
            name="designation"
            fullWidth
            value={formData.employmentDetails.designation || ""}
            onChange={(e) =>
              handleInputChange("employmentDetails", { designation: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Salary"
            type="number"
            name="salary"
            variant="outlined"
            fullWidth
            value={formData.compensation.salary || ""}
            onChange={(e) =>
              handleInputChange("compensation", { salary: e.target.value })
            }
          />
        </Grid>
      </Grid>
    </div>
  );

  const Step3 = () => (
    <div>
      <Typography variant="h6" gutterBottom>Step 3: Performance, Login, and Miscellaneous</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="outlined" component="label">
            Upload CV
            <input
              type="file"
              name="cv"
              hidden
              onChange={(e) =>
                handleInputChange("performance", { cv: e.target.files[0] })
              }
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" component="label" flex>
            Upload Photo
            <input
              type="file"
              name="cv"
              hidden
              onChange={(e) =>
                handleInputChange("performance", { cv: e.target.files[0] })
              }
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Work Email"
            variant="outlined"
            name="workemail"
            fullWidth
            value={formData.login.workEmail || ""}
            onChange={(e) =>
              handleInputChange("login", { workEmail: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Username"
            variant="outlined"
            name="username"
            fullWidth
            value={formData.login.username || ""}
            onChange={(e) =>
              handleInputChange("login", { username: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            fullWidth
            value={formData.login.password || ""}
            onChange={(e) =>
              handleInputChange("login", { password: e.target.value })
            }
          />
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Typography variant="h5" gutterBottom>
        Employee Form
      </Typography>
      <LinearProgress variant="determinate" value={(step / 3) * 100} sx={{ mb: 3 }} />
      
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      
      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <Button variant="contained" color="secondary" onClick={handlePrev}>
            Previous
          </Button>
        )}
        {step < 3 && (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        )}
        {step === 3 && (
          <Button variant="contained" color="success">
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmployeeForm;
