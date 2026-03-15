import { useState } from 'react'
import './Form.css'

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  });

  const [id, setId] = useState()

  const newUsers = {
    ...formData,
    id: Date.now()
  };

  console.log(newUsers);



  let initialValue = [];

  const users = localStorage.getItem("userlist");
  initialValue = users ? JSON.parse(users) : [];

  const [lists, setLists] = useState(initialValue);


  const saveData = (data) => {
    localStorage.setItem("userlist", JSON.stringify(data));
  }


  const handleChange = (e) => {
    setFormData({
      ...newUsers,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const users = [...lists, formData];

    setLists(users);
    saveData(users);

    console.log(users);

    setFormData({
      name: '',
      address: '',
      phone: ''
    });
  };


  const handleDelete = (e) => {

    e.preventDefault();


  }

  console.log(id,"Id")

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

        <button type="submit">Submit</button>
      </form>


      <div className="card">
        <h3>User Lists:</h3>
        <ul>
          {Array.isArray(lists) && lists?.map((user, index) => (
            <li key={index}>
              <div>
                id: {user.id} <br />
                Name: {user.name} <br />
                Address: {user.address} <br />
                Phone: {user.phone}
                <button id={user.id} onClick={() => { handleDelete,setId(user.id)}}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Form;