import React, { useState } from 'react';

export default function NewValidation() {
    const [user, setUser] = useState({
        id: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: "",
        address: ""
    });

    const [image, setImage] = useState(null);
    const [error, setError] = useState({}); 

    const validate = () => {
        let error = {};

        if (!user.first_name.trim()) {
            error.first_name = "First name is required";
        }

        if (!user.last_name.trim()) {
            error.last_name = "Last name is required";
        }

        if (!user.address.trim()) {
            error.address = "Address is required";
        }

        if (!user.password.trim()) {
            error.password = "Password is required";
        }

        if (!user.confirm_password.trim()) {
            error.confirm_password = "Confirm password is required";
        } else if (user.password !== user.confirm_password) {
            error.confirm_password = "Password do not match";
        }

        if (!image) {
            error.image = "Image is required";
        }

        return error;
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const updatedUser = {
            ...user,
            [name]: value
        };

        setUser(updatedUser);

        let newError = { ...error };

        if (name === "first_name") {
            newError.first_name = value ? "" : "First Name is required";
        }

        if (name === "last_name") {
            newError.last_name = value ? "" : "Last Name is required";
        }

        if (name === "password") {
            newError.password = value ? "" : "Password is required";

            // ✅ check confirm password also
            if (updatedUser.confirm_password && value !== updatedUser.confirm_password) {
                newError.confirm_password = "Password do not match";
            } else {
                newError.confirm_password = "";
            }
        }

        if (name === "confirm_password") {
            if (!value) {
                newError.confirm_password = "Confirm Password is required";
            } else if (value !== updatedUser.password) {
                newError.confirm_password = "Password do not match";
            } else {
                newError.confirm_password = "";
            }
        }

        if (name === "address") {
            newError.address = value ? "" : "Address is required";
        }

        setError(newError); // ✅ single update
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setError(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        const formData = {
            ...user,
            image: image,
            id: Date.now(),
        };

        console.log("Submitted Data:", formData);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        setError(prev => ({
            ...prev,
            image: file ? "" : "Image is required"
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input placeholder='First Name' onChange={handleChange} name="first_name" value={user.first_name} />
                <span style={{ color: "red" }}>{error.first_name}</span>
            </div>

            <div>
                <input placeholder='Last Name' onChange={handleChange} name="last_name" value={user.last_name} />
                <span style={{ color: "red" }}>{error.last_name}</span>
            </div>

            <div>
                <input placeholder='Address' onChange={handleChange} name="address" value={user.address} />
                <span style={{ color: "red" }}>{error.address}</span>
            </div>

            <div>
                <input type='password' placeholder='Password' onChange={handleChange} name="password" value={user.password} />
                <span style={{ color: "red" }}>{error.password}</span>
            </div>

            <div>
                <input type='password' placeholder='Confirm Password' onChange={handleChange} name="confirm_password" value={user.confirm_password} />
                <span style={{ color: "red" }}>{error.confirm_password}</span>
            </div>

            <div>
                <input type='file' onChange={handleImageChange} />
                <span style={{ color: "red" }}>{error.image}</span>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}