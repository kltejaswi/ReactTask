import Checkbox from 'material-ui/Checkbox';
import React, { Component } from 'react'

export class CheckboxField extends Component {

    handleCheck = (event, isInputChecked) => {
        this.props.onChange(event, isInputChecked, this.props.category);
    };

    render() {
        return (
            <Checkbox
                category={this.props.label}
                iconStyle={{fill: '#000'}}
                value={this.props.value}
                onCheck={this.handleCheck}
            />
        )}
}