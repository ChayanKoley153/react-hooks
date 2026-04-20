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

        if (name === "first_name") {
            if (value.length === 0) {
                setError({ ...error, first_name: "first name is required" })
                setUser({ ...user, first_name: "" })
            } else {
                setError({ ...error, first_name: "" })
                setUser({ ...user, first_name: value })
            }
        }

        if (name === "last_name") {
            if (value.length === 0) {
                setError({ ...error, last_name: "last name is required" })
                setUser({ ...user, last_name: "" })
            } else {
                setError({ ...error, last_name: "" })
                setUser({ ...user, last_name: value })
            }
        }

        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "password is required" })
                setUser({ ...user, password: "" })
            } else {
                setError({ ...error, password: "" })
                setUser({ ...user, password: value })
            }

        }

        if (name === "confirm_password") {
            if (value.length === 0) {
                setError({ ...error, confirm_password: "confirm password is required" })
                setUser({ ...user, confirm_password: "" })
            } else {
                setUser({ ...user, confirm_password: value })

                if (value !== user.password) {
                    setError({ ...error, confirm_password: "passwords do not match" });
                } else {
                    setError({ ...error, confirm_password: "" });
                }
            }
        }

        if (name === "address") {
            if (value.length === 0) {
                setError({ ...error, address: "address is required" })
                setUser({ ...user, address: "" })
            } else {
                setError({ ...error, address: "" })
                setUser({ ...user, address: value })
            }
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        setError(prev => ({
            ...prev,
            image: file ? "" : "Image is required"
        }));
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