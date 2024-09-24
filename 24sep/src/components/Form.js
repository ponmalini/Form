import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
    const handlesubmit = (e) => {
        e.preventDefault();
        setSubmittedData({ name, email, age });
    };
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder='Enter the name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                <label>Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter the mail id'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div>
                <label>Age:</label>
                    <input
                        type="number"
                        id="age"
                        placeholder='Enter the age'
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
            </div>
    );
};

export default Form;