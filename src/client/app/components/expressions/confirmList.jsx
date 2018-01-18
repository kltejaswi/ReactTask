import React, { Component } from 'react'
var confirmList ={};
export default class ConfirmList extends Component {

    componentWillMount() {

        confirmList = JSON.parse(localStorage.getItem('Confirmedlist'));
    }

    render() {
        return (
            <div>
                <h2>Confirmed list of names</h2>
                {confirmList.map(element => (
                    <div>
                        {element}
                    </div>
                ))}
            </div>
        );
    }
};