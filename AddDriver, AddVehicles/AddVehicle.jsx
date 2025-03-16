import React, { useState } from "react";
import "./AddDriver.css";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    vehicleModel: "",
    fuelType: "",
    seatingCapacity: "",
    pricePerDay: "",
    registrationPlate: "",
    vehicleId: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files?.[0] || null : value,
    }));

    // Remove error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validationFunctions = {
    vehicleModel: (value) => (!value ? "Vehicle model is required." : ""),
    fuelType: (value) => (!value ? "Fuel type is required." : ""),
    seatingCapacity: (value) => {
      if (!value) return "Seating capacity is required.";
      if (isNaN(value) || value <= 0)
        return "Seating capacity must be a positive number.";
      return "";
    },
    pricePerDay: (value) => {
      if (!value) return "Price per day is required.";
      if (isNaN(value) || value <= 0)
        return "Price per day must be a positive number.";
      return "";
    },
    registrationPlate: (value) =>
      !value ? "Registration plate is required." : "",
    vehicleId: (value) => (!value ? "Vehicle ID is required." : ""),
    photo: (value) => {
      if (!value) return "Photo is required.";
      if (value && value.type !== "image/jpeg")
        return "Photo must be a .jpg file.";
      return "";
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      const validate = validationFunctions[key];
      if (validate) {
        const error = validate(formData[key]);
        if (error) newErrors[key] = error;
      } else if (formData[key] === "" || formData[key] === null) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear form on success
    setFormData({
      vehicleModel: "",
      fuelType: "",
      seatingCapacity: "",
      pricePerDay: "",
      registrationPlate: "",
      vehicleId: "",
      photo: null,
    });

    // setErrors({});
    // alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Enter Vehicle Details</h2>
      <form onSubmit={handleSubmit}>
        {[
          {
            label: "Vehicle Model",
            type: "text",
            name: "vehicleModel",
            placeholder: "Enter vehicle model",
          },
          {
            label: "Fuel Type",
            type: "text",
            name: "fuelType",
            placeholder: "Enter fuel type",
          },
          {
            label: "Seating Capacity",
            type: "text",
            name: "seatingCapacity",
            placeholder: "Enter seating capacity",
          },
          {
            label: "Price Per Day",
            type: "text",
            name: "pricePerDay",
            placeholder: "Enter price per day",
          },
          {
            label: "Registration Plate",
            type: "text",
            name: "registrationPlate",
            placeholder: "Enter registration plate",
          },
          {
            label: "Vehicle ID",
            type: "text",
            name: "vehicleId",
            placeholder: "Enter vehicle ID",
          },
          {
            label: "Photo",
            type: "file",
            name: "photo",
            placeholder: "Upload photo",
          },
        ].map(({ label, type, name, placeholder }) => (
          <div className="form-group" key={name}>
            <label>{label}:</label>
            <div>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={type === "file" ? undefined : formData[name]}
                onChange={handleChange}
              />
              {errors[name] && <p className="error">{errors[name]}</p>}
            </div>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddVehicle;
