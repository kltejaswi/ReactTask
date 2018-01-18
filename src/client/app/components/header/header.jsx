import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import render from 'react-dom';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
};

export class HeaderTitle  extends React.Component{

    getChildContext() {
        return { muiTheme: getMuiTheme('#1B1C1D') };
    }
    constructor(props) {
        super(props);
        this.state = { activeItem: 'inbox' }
        this.handleItemClick = this.handleItemClick.bind(this);
    };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (

            <div>
                <AppBar
                    className="app-bar"
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementRight={<TextField
                        hintText="Hint Text"
                        floatingLabelText="Floating Label Text"
                    /> }
                />

                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Paper style={style} className="side-bar">
                        <Menu className="inverted">
                            <MenuItem className="menu-tem-text" primaryText="Submit Request" active={activeItem === 'submitRequest'}
                                      onClick={this.handleItemClick} />
                            <MenuItem className="menu-tem-text" primaryText=" Update Request"  active={activeItem === 'updateRequest'}
                                      onClick={this.handleItemClick}/>
                            <MenuItem className="menu-tem-text" primaryText="Request Monitor"  active={activeItem === 'requestMonitor'}
                                      onClick={this.handleItemClick}/>
                            <MenuItem className="menu-tem-text" primaryText="Training Manual"  active={activeItem === 'trainingManual'}
                                      onClick={this.handleItemClick}/>
                            <MenuItem className="menu-tem-text" primaryText = " Submit Bug" active={activeItem === 'sumbitBug'}
                                      onClick={this.handleItemClick}/>
                            <MenuItem className="menu-tem-text" primaryText = "Log Out" active={activeItem === 'logOut'}
                                      onClick={this.handleItemClick}/>

                        </Menu>
                    </Paper>
                </MuiThemeProvider></div>)
    }

}


const LabAdminHeader = props => {
    return (
        <div>
            <HeaderTitle />
            {props.children}
        </div>
    )
}

export default LabAdminHeader;

HeaderTitle.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
