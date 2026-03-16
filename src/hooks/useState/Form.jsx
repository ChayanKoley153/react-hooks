import { useState } from "react";
import "./Form.css";

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    id: ""
  });

  // edit id
  const [editId, setEditId] = useState(null);

  const users = localStorage.getItem("userlist");
  const initialValue = users ? JSON.parse(users) : [];
  const [lists, setLists] = useState(initialValue);


  // save to localstorage
  const saveData = (data) => {
    localStorage.setItem("userlist", JSON.stringify(data));
  };


 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  // add/update user
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updateList = lists.map((item) =>
        item.id === editId ? { ...formData, id: editId } : item
      );

      setLists(updateList);
      saveData(updateList);
      setEditId(null);

    } else {

      const newUser = {
        ...formData,
        id: Date.now()
      };

      const users = [...lists, newUser];

      setLists(users);
      saveData(users);
    }

    setFormData({
      name: "",
      address: "",
      phone: "",
      id: ""
    });
  };


  // delete user
  const handleDelete = (id) => {
    const updateList = lists.filter((item) => item.id !== id);

    setLists(updateList);
    saveData(updateList);
  };


  // update user
  const handleUpdate = (id) => {
    const editUser = lists.find((item) => item.id === id); 

    // console.log(editUser);
    
    setFormData(editUser);
    setEditId(id);
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>User Form:</h2>

        <label>Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        /><br />

        <label>Address: </label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
        /><br />

        <label>Phone Number: </label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        /><br />

        <button type="submit">
          {editId ? "Update" : "Submit"}
        </button>
      </form>

      <div className="card">
        <h3>Users Lists:</h3>

        <ul>
          {lists.map((user) => (
            <li key={user.id}>
              <div>
                id: {user.id} <br />
                Name: {user.name} <br />
                Address: {user.address} <br />
                Phone: {user.phone} <br />
                <button onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
                <button onClick={() => handleUpdate(user.id)}>
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
};

export default Form;