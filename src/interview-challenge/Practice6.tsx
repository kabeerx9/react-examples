import React, { useState } from 'react';

const Practice6 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [error, setError] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateFormData = () => {
    let isError = false;

    if (!formData.name) {
      setError((prev) => ({
        ...prev,
        name: 'Name is required',
      }));
      isError = true;
    } else {
      setError((prev) => ({
        ...prev,
        name: '',
      }));
    }
    if (!formData.email) {
      setError((prev) => ({
        ...prev,
        email: 'Email is required',
      }));
      isError = true;
    } else {
      setError((prev) => ({
        ...prev,
        email: '',
      }));
    }

    return isError;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateFormData();

    if (error) {
      return;
    }
    setError({
      name: '',
      email: '',
    });

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setFormData({
          name: '',
          email: '',
        });
      });
  };
  return (
    <form
      className="flex flex-col bg-gray-200 w-1/2 justify-center items-center "
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      {error.name && <p className="text-red-500 font-bold">{error.name}</p>}
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="text"
        value={formData.email}
        onChange={handleChange}
      />
      {error.email && <p className="text-red-500 font-bold">{error.email}</p>}
      <button className="p-2 m-2 bg-black text-white rounded-lg" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Practice6;
