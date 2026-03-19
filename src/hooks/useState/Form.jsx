import { useState } from "react";
import { CiSearch } from "react-icons/ci";
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

  // search input
  const [input, setInput] = useState("");


  let initialValue = [];
  const users = localStorage.getItem("userlist");
  initialValue = users ? JSON.parse(users) : [];
  const [lists, setLists] = useState(initialValue);


  // save to localstorage
  const saveData = (data) => {
    localStorage.setItem("userlist", JSON.stringify(data));
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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



  // search input
  const handleInput = (value) => {
    setInput(value);
    // console.log(input);
  }

  // search filter
  const filteredUsers = lists.filter((user) =>
    user.name.toLowerCase().includes(input.toLowerCase())
  );

  console.log(filteredUsers);



  return (
    <>
      <div className="search-box">
        <CiSearch className="search-icon" />
        <input type="text" placeholder="search with name" onChange={(e) => handleInput(e.target.value)}
        />
      </div>

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
          {filteredUsers.map((user) => (
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