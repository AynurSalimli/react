import React, {useState} from 'react'

const Input = () => {
  const [form, setForm] = useState({ name: " ", surname: " " });
  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  return (
    <div className="inputExample">
      <p>Please enter the name</p>
      <br />
      <p>Name:</p>
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={onChangeInput}
      />
      <br />
      <br />
      <p>Surname: </p>
      <input
        name="surname"
        type="text"
        value={form.surname}
        onChange={onChangeInput}
      />
      <br />
      {form.name} {form.surname}
    </div>
  );
};

export default Input