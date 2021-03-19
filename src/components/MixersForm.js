import React, { Component } from 'react';

class MixersForm extends Component {
    state = {
        mixer_type: '',
        name: '',
        price: '',
        yield: '',
        ingreds: ''

    }
    render() {
        return (
            <form>
            <label>Name:</label>
            <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
            <br />
            <label>Type:</label>
            <input type='text' value={this.state.mixer_type} onChange={this.handleChange} name="mixer_type"/>
            <br />
            <label>Ingredients:</label>
            <input type='text' value={this.state.ingreds} onChange={this.handleChange} name="ingreds"/>
            <br />
            <label>Price:</label>
            <input type='number' value={this.state.price} onChange={this.handleChange} name="price"/>
            <br />
            <label>Yield (oz):</label>
            <input type='number' value={this.state.yield} onChange={this.handleChange} name="yield"/>
            <br />
            <input type='submit' value="Store New Mixer" />
        </form>
        );
    }
}

export default MixersForm;
