import React, { Component } from 'react'
import '../styles/ItemsList.css'



export default class ItemsList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(
                    item => (
                        <li id={item.id}>{item.text}</li>
                    )
                )}
            </ul>
        )
    }
}
