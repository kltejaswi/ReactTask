import React, { Component } from 'react'
import {Link} from 'react-router';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {reduxForm } from 'redux-form';
import {CheckboxField} from "./checkbox.jsx";

const genders = [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
]
const styles = {
    customWidth: {
        width: 200,
    },


};
var obj=[];

class MyForm extends Component {
    state = {
        checked: true,
        checked2:false,
        length:0,
        data:[]
    }
    componentWillMount() {
        localStorage.clear();
        if(obj.length == 0){
            this.setState({checked:false})
        }
        fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'get'
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({ data: data })
            })
    }

    handleCheckbox(event, isChecked, value) {
        console.log(value);
        obj.push(value);
        if(obj.length >0 ){
            this.setState({checked:true})
        }
        this.setState({length: obj.length});
    }

    submitList(){
        localStorage.setItem("Confirmedlist", JSON.stringify(obj));
    }
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }


    render() {

        console.log(this.state.length);
        const { formData, value, rating, length } = this.state;
        return (
            <div className="App">
                {this.state.checked ? <h2> {this.state.length} of {this.state.data.length} selected</h2>:''}
                {this.state.data.map(element => (
                    <div className="main-wrapper">
                        <span className="left-wrapper">
                    <CheckboxField
                        category={element.name}
                        value={element.email}
                        onChange={this.handleCheckbox.bind(this)}
                    />
                        </span>
                        <div className="right-wrapper">
                    <div className="info-name">{element.name}</div>
                        <div className="info-email">{element.email}</div>
                    </div>
                    </div>
                ))}
                   <Link to="/confirmList" onClick={this.submitList.bind(this)} className="confirm-btn">confirm</Link>
           </div>
        )

    }
}

export default reduxForm({
    form: 'simple',

})(MyForm)


MyForm.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
