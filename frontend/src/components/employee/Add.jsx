import React, { useState, useCallback } from "react";
import { TextField, Button, Grid, Typography, LinearProgress, FormHelperText, Card, CardContent } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Step1 = React.memo(({ formData, handleInputChange, errors }) => (
  <div>
    <Typography variant="h6" gutterBottom>Step 1: Personal Information</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Full Name"
          variant="outlined"
          name="fullname"
          fullWidth
          required
          value={formData.personalInfo.fullName}
          onChange={(e) =>
            handleInputChange("personalInfo", "fullName", e.target.value)
          }
          error={!!errors.personalInfo.fullName}
          helperText={errors.personalInfo.fullName}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Date of Birth"
          type="date"
          variant="outlined"
          name="dob"
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.personalInfo.dob}
          onChange={(e) =>
            handleInputChange("personalInfo", "dob", e.target.value)
          }
          error={!!errors.personalInfo.dob}
          helperText={errors.personalInfo.dob}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Gender"
          variant="outlined"
          name="gender"
          fullWidth
          select
          required
          value={formData.personalInfo.gender}
          onChange={(e) =>
            handleInputChange("personalInfo", "gender", e.target.value)
          }
          SelectProps={{
            native: true,
          }}
          error={!!errors.personalInfo.gender}
          helperText={errors.personalInfo.gender}
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
          required
          value={formData.personalInfo.phone}
          onChange={(e) =>
            handleInputChange("personalInfo", "phone", e.target.value)
          }
          error={!!errors.personalInfo.phone}
          helperText={errors.personalInfo.phone}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          fullWidth
          required
          value={formData.personalInfo.email}
          onChange={(e) =>
            handleInputChange("personalInfo", "email", e.target.value)
          }
          error={!!errors.personalInfo.email}
          helperText={errors.personalInfo.email}
        />
      </Grid>
    </Grid>
  </div>
));

const Step2 = React.memo(({ formData, handleInputChange, errors }) => (
  <div>
    <Typography variant="h6" gutterBottom>Step 2: Employment Details</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Employee ID"
          variant="outlined"
          name="id"
          fullWidth
          required
          value={formData.employmentDetails.employeeID}
          onChange={(e) =>
            handleInputChange("employmentDetails", "employeeID", e.target.value)
          }
          error={!!errors.employmentDetails.employeeID}
          helperText={errors.employmentDetails.employeeID}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Date of Joining"
          type="date"
          variant="outlined"
          name="doj"
          required
          fullWidth
          
          value={formData.employmentDetails.doj}
          onChange={(e) =>
            handleInputChange("employmentDetails", "doj", e.target.value)
          }
          error={!!errors.employmentDetails.doj}
          helperText={errors.employmentDetails.doj}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Department"
          variant="outlined"
          name="dept"
          fullWidth
          required
          value={formData.employmentDetails.department}
          onChange={(e) =>
            handleInputChange("employmentDetails", "department", e.target.value)
          }
          error={!!errors.employmentDetails.department}
          helperText={errors.employmentDetails.department}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Designation"
          variant="outlined"
          name="designation"
          fullWidth
          required
          value={formData.employmentDetails.designation}
          onChange={(e) =>
            handleInputChange("employmentDetails", "designation", e.target.value)
          }
          error={!!errors.employmentDetails.designation}
          helperText={errors.employmentDetails.designation}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Shift Hours"
          variant="outlined"
          name="shiftHours"
          type="number"
          fullWidth
          required
          value={formData.employmentDetails.shiftHours}
          onChange={(e) =>
            handleInputChange("employmentDetails", "shiftHours", e.target.value)
          }
          error={!!errors.employmentDetails.shiftHours}
          helperText={errors.employmentDetails.shiftHours}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Salary"
          type="number"
          name="salary"
          variant="outlined"
          fullWidth
          value={formData.compensation.salary}
          onChange={(e) =>
            handleInputChange("compensation", "salary", e.target.value)
          }
          error={!!errors.compensation.salary}
          helperText={errors.compensation.salary}
        />
      </Grid>
    </Grid>
  </div>
));

const Step3 = React.memo(({ formData, handleInputChange, handleFileChange, errors }) => (
  <div>
    <Typography variant="h6" gutterBottom>Step 3: Portal Login</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button variant="outlined" component="label" sx={{ borderColor: 'red', color: 'red' }}>
          Upload CV
          <input
            type="file"
            name="cv"
            hidden
            onChange={(e) =>
              handleFileChange("files", "cv", e.target.files[0])
            }
          />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" component="label" sx={{ borderColor: 'red', color: 'red' }}>
          Upload Photo
          <input
            type="file"
            name="dp"
            hidden
            onChange={(e) =>
              handleFileChange("files", "dp", e.target.files[0])
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
          required
          value={formData.portalLogin.workEmail}
          onChange={(e) =>
            handleInputChange("portalLogin", "workEmail", e.target.value)
          }
          error={!!errors.portalLogin.workEmail}
          helperText={errors.portalLogin.workEmail}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          fullWidth
          required
          value={formData.portalLogin.password}
          onChange={(e) =>
            handleInputChange("portalLogin", "password", e.target.value)
          }
          error={!!errors.portalLogin.password}
          helperText={errors.portalLogin.password}
        />
      </Grid>
    </Grid>
  </div>
));

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
    },
    employmentDetails: {
      employeeID: "",
      department: "",
      designation: "",
      doj: "",
      shiftHours: "",
    },
    portalLogin: {
      workEmail: "",
      password: "",
    },
    compensation: {
      salary: "",
    },
    files: {
      cv: null,
      photo: null,
    },
  });

  const [errors, setErrors] = useState({
    personalInfo: {
      fullName: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
    },
    employmentDetails: {
      employeeID: "",
      department: "",
      doj: "",
      designation: "",
      shiftHours: "",
    },
    portalLogin: {
      workEmail: "",
      password: "",
    },
    compensation: {
      salary: "",
    },
    files: {
      cv: null,
      photo: null,
    },
  });

  const handleInputChange = useCallback((section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));

    // Remove the error once the user inputs a value
    setErrors((prevErrors) => ({
      ...prevErrors,
      [section]: {
        ...prevErrors[section],
        [field]: value ? "" : prevErrors[section][field],
      },
    }));
  }, []);

  const handleFileChange = useCallback((section, field, file) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: file,
      },
    }));
  }, []);

  const handleNext = () => {
    let validationPassed = true;
    const newErrors = { ...errors };

    // Validation for Step 1
    if (step === 1) {
      const { fullName, dob, gender, phone, email } = formData.personalInfo;
      if (!fullName) newErrors.personalInfo.fullName = "Full Name is required.";
      if (!dob) newErrors.personalInfo.dob = "Date of Birth is required.";
      if (!gender) newErrors.personalInfo.gender = "Gender is required.";
      if (!phone) newErrors.personalInfo.phone = "Phone Number is required.";
      if (!email) newErrors.personalInfo.email = "Email is required.";

      validationPassed = !Object.values(newErrors.personalInfo).some((error) => error);
    }

    // Validation for Step 2
    if (step === 2) {
      const { employeeID, department, designation } = formData.employmentDetails;
      if (!employeeID) newErrors.employmentDetails.employeeID = "Employee ID is required.";
      if (!department) newErrors.employmentDetails.department = "Department is required.";
      if (!designation) newErrors.employmentDetails.designation = "Designation is required.";

      validationPassed = !Object.values(newErrors.employmentDetails).some((error) => error);
    }

    // Validation for Step 3
    if (step === 3) {
      const { workEmail, password } = formData.portalLogin;
      if (!workEmail) newErrors.portalLogin.workEmail = "Work Email is required.";
      if (!password) newErrors.portalLogin.password = "Password is required.";

      validationPassed = !Object.values(newErrors.portalLogin).some((error) => error);
    }

    setErrors(newErrors);

    if (validationPassed) {
      if (step < 3) {
        setStep(step + 1);
      }
    }
  };

  const handleSubmit = () => {
    let validationPassed = true;
    const newErrors = { ...errors };

    // Validate all steps before submitting
    const { fullName, dob, gender, phone, email } = formData.personalInfo;
    if (!fullName) newErrors.personalInfo.fullName = "Full Name is required.";
    if (!dob) newErrors.personalInfo.dob = "Date of Birth is required.";
    if (!gender) newErrors.personalInfo.gender = "Gender is required.";
    if (!phone) newErrors.personalInfo.phone = "Phone Number is required.";
    if (!email) newErrors.personalInfo.email = "Email is required.";

    const { employeeID, department, doj, designation } = formData.employmentDetails;
    if (!employeeID) newErrors.employmentDetails.employeeID = "Employee ID is required.";
    if (!department) newErrors.employmentDetails.department = "Department is required.";
    if (!doj) newErrors.employmentDetails.doj = "Date of Joining is required.";
    if (!designation) newErrors.employmentDetails.designation = "Designation is required.";

    const { workEmail, password } = formData.portalLogin;
    if (!workEmail) newErrors.portalLogin.workEmail = "Work Email is required.";
    if (!password) newErrors.portalLogin.password = "Password is required.";

    validationPassed = !Object.values(newErrors.personalInfo).some((error) => error) &&
                       !Object.values(newErrors.employmentDetails).some((error) => error) &&
                       !Object.values(newErrors.portalLogin).some((error) => error);

    setErrors(newErrors);

    if (validationPassed) {
      // Perform form submission logic (e.g., API call)
      console.log("Form submitted successfully with the data: ", formData);
      alert("Form submitted successfully!");
      navigate("/admin-dashboard/employee");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <Card sx={{ width: "80%", maxWidth: 800 }}>
        <CardContent>
          <LinearProgress variant="determinate" value={(step / 3) * 100} sx={{ marginBottom: 2 }} />
          <div>
            {step === 1 && <Step1 formData={formData} handleInputChange={handleInputChange} errors={errors} />}
            {step === 2 && <Step2 formData={formData} handleInputChange={handleInputChange} errors={errors} />}
            {step === 3 && <Step3 formData={formData} handleInputChange={handleInputChange} handleFileChange={handleFileChange} errors={errors} />}
          </div>
          {step < 3 ? (
            <Button variant="contained" color="primary" onClick={handleNext} sx={{ marginTop: 2 }}>
              Next
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginTop: 2 }}>
              Submit
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeForm;
