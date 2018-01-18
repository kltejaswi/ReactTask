import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import render from 'react-dom';
import { Grid, Button, Form, Label, Menu, Input, Item, Image } from 'semantic-ui-react';

// This is an es6 class because it has state
class LabAdminMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: 'inbox' } 
        this.handleItemClick = this.handleItemClick.bind(this);  
    }; 
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return(
            <Menu className="inverted" vertical>
                <Menu.Item name='submitRequest' active={activeItem === 'submitRequest'} onClick={this.handleItemClick}>
                    Submit Request
                </Menu.Item>
                <Menu.Item name='updateRequest' active={activeItem === 'updateRequest'} onClick={this.handleItemClick}>
                    Update Request
                </Menu.Item>
                <Menu.Item name='requestMonitor' active={activeItem === 'requestMonitor'} onClick={this.handleItemClick}>
                    Request Monitor
                </Menu.Item>
                <Menu.Item name='trainingManual' active={activeItem === 'trainingManual'} onClick={this.handleItemClick}>
                    Training Manual 
                </Menu.Item>
                <Menu.Item name='sumbitBug' active={activeItem === 'sumbitBug'} onClick={this.handleItemClick}>
                    Submit Bug 
                </Menu.Item>
                <Menu.Item name='logOut' active={activeItem === 'logOut'} onClick={this.handleItemClick}>
                    Log Out 
                </Menu.Item>
            </Menu>
        );
    }    
}

export default LabAdminMenu;