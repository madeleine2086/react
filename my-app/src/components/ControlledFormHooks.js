import React from 'react'
import { useState } from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comment, setComment] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comment);
    }
    return (
        <div>
            <h2>Please fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="id-name">Your Name:</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="id-name"
                    name="name"
                    type="text"
                />
              </div>
              <div>
                <label htmlFor="id-category">Query Category:</label>
                <select 
                  id="id-category" 
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="website"> Website issue</option>
                  <option value="order"> Order issue</option>
                  <option value="general"> General inquiry</option>
                </select>
                <div>
                  <label htmlFor='id-comments'>Comments:</label>
                  <textarea 
                    onChange={(e) => setComment(e.target.value)} 
                    value={comment} 
                    id="id-comments" 
                    name="comments" />
                </div>
                <input type="submit" value="Submit" />
              </div>
            </form>
        </div>
    )
}

export default ControlledFormHooks