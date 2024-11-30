import axios from "axios";
import { useState } from "react";
import CityDropdown from "../../components/city/CityDropdown";
import CategoryDropdown from "../../components/category/CategoryDropdown";

const Create = () => {
  const [businessData, setBusinessData] = useState({
    name: "",
    description: "",
    address: "",
    phoneNumber: "",
    email: "",
    website: "",
    hoursOfOperation: "",
    categoryId: 0,
    ownerId: "",
    isFeatured: false,
    latitude: "",
    longitude: "",
    postalCode: "",
    cityID: 0,
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBusinessData({
      ...businessData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCityChange = (cityID) => {
    setBusinessData({ ...businessData, cityID });
  };

  const handleCategoryChange = (categoryId) => {
    setBusinessData({ ...businessData, categoryId });
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      Object.keys(businessData).forEach((key) => formData.append(key, businessData[key]));
      Array.from(images).forEach((file) => formData.append("images", file));

console.log('data', formData);

    //   await axios.post("/api/businesss", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });

    //   alert("Business saved successfully!");
    //   setBusinessData({
    //     name: "",
    //     description: "",
    //     address: "",
    //     phoneNumber: "",
    //     email: "",
    //     website: "",
    //     hoursOfOperation: "",
    //     categoryId: 0,
    //     ownerId: "",
    //     isFeatured: false,
    //     latitude: "",
    //     longitude: "",
    //     postalCode: "",
    //     cityID: 0,
    //   });
    //   setImages([]);
    } catch (error) {
      console.error(error);
      alert("Error saving business");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Business</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        {/* Business Name */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Business Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter business name"
            value={businessData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="col-md-6">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter description"
            value={businessData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Address */}
        <div className="col-md-6">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Enter address"
            value={businessData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="col-md-6">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={businessData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            value={businessData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Website */}
        <div className="col-md-6">
          <label htmlFor="website" className="form-label">
            Website
          </label>
          <input
            type="url"
            className="form-control"
            id="website"
            name="website"
            placeholder="Enter website URL"
            value={businessData.website}
            onChange={handleChange}
          />
        </div>

        {/* Hours of Operation */}
        <div className="col-md-12">
          <label htmlFor="hoursOfOperation" className="form-label">
            Hours of Operation
          </label>
          <textarea
            className="form-control"
            id="hoursOfOperation"
            name="hoursOfOperation"
            placeholder="Enter hours of operation as JSON"
            value={businessData.hoursOfOperation}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Latitude */}
        <div className="col-md-4">
          <label htmlFor="latitude" className="form-label">
            Latitude
          </label>
          <input
            type="number"
            step="any"
            className="form-control"
            id="latitude"
            name="latitude"
            placeholder="Enter latitude"
            value={businessData.latitude}
            onChange={handleChange}
          />
        </div>

        {/* Longitude */}
        <div className="col-md-4">
          <label htmlFor="longitude" className="form-label">
            Longitude
          </label>
          <input
            type="number"
            step="any"
            className="form-control"
            id="longitude"
            name="longitude"
            placeholder="Enter longitude"
            value={businessData.longitude}
            onChange={handleChange}
          />
        </div>

        {/* Postal Code */}
        <div className="col-md-4">
          <label htmlFor="postalCode" className="form-label">
            Postal Code
          </label>
          <input
            type="text"
            className="form-control"
            id="postalCode"
            name="postalCode"
            placeholder="Enter postal code"
            value={businessData.postalCode}
            onChange={handleChange}
          />
        </div>

        {/* City */}
        <div className="col-md-6">
          <label htmlFor="cityID" className="form-label">
            City
          </label>
          <CityDropdown value={businessData.cityID} onChange={handleCityChange} />
        </div>

        {/* Category */}
        <div className="col-md-6">
          <label htmlFor="categoryId" className="form-label">
            Category
          </label>
          <CategoryDropdown value={businessData.categoryId} onChange={handleCategoryChange} />
        </div>

        {/* Images */}
        <div className="col-md-12">
          <label htmlFor="images" className="form-label">
            Upload Images
          </label>
          <input
            type="file"
            className="form-control"
            id="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Saving..." : "Save Business"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
