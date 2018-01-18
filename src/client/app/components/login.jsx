import React, {Component} from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export class LoginPageComponent extends React.Component {


    getChildContext() {
        return {muiTheme: getMuiTheme(darkBaseTheme)};
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div className="main-container">
                    <h1 className="site-header">PEAPS</h1>
                    <h2 className="padding-correct">Protein production and purification system</h2>
                    <form action="/request" method="POST" className="login-form">
                        <label>please login to continue....</label>
                        <TextField ref="login" type="text" name="login" placeholder="Login" className="userName"
                                   id="userName" autofocus/>
                        <TextField ref="password" type="password" name="password" placeholder="Password"
                                   className="password" id="password" autofocus/>
                        <Link to="/request" className="submit-btn">Submit</Link>
                    </form>
                </div>
            </MuiThemeProvider>
        );
    }
}
;

LoginPageComponent.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
