import React, { Component } from 'react'
import "../styles/MemoList.css"
import ItemsList from './ItemsList';

export class MemoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            items: []
        }
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line
        const newItem = {
            id: Date.now(),
            text: this.state.text
        }
        this.setState(
            state => ({
                items: state.items.concat(newItem),
                text: ''
            })
        )
    }

    render() {
        return (
            <div>
                <h3>My plan for the day!</h3>

                <ItemsList items={this.state.items} />

                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="listItem" onChange={this.handleChange} value={this.state.text}></input>
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }
}

export default MemoList
