import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             category: 'website',
             comment: ''
        }
    }

    handleNameChange = (event) => {
      this.setState({
        name: event.target.value
      })
    }

    handleCategoryChange = (event) => {
      this.setState({
        category: event.target.value
      })
    }

    handleCommentsChange = (event) => {
      this.setState({
        comment: event.target.value
      })
    }
    
    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form>
                  <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        value={this.state.name}
                        onChange={this.handleNameChange}
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
                      value={this.state.category}
                      onChange={this.handleCategoryChange}
                    >
                      <option value="website"> Website issue</option>
                      <option value="order"> Order issue</option>
                      <option value="general"> General inquiry</option>
                    </select>
                    <div>
                      <label htmlFor='id-comments'>Comments:</label>
                      <textarea 
                        onChange={this.handleCommentsChange} 
                        value={this.state.comment} 
                        id="id-comments" 
                        name="comments" />
                    </div>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
            </div>
        )
    }
}

export default ControlledForm