import React, { Component } from "react";
import "../Styles/contact.css"
const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

const validation = ({ error, ...rest }) => {
    let checkValidation = false;

    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};

export default class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            error: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    onFormSubmit = event => {
        event.preventDefault();
        if (validation(this.state)) {
            console.log(this.state)
        } else {
            console.log("Error occured");
        }
    };

    formObject = event => {
 
        event.preventDefault();

        const { name, value } = event.target;
        let error = { ...this.state.error };

        switch (name) {
            case "name":
                error.name = value.length < 5 ? "Name should be 5 characters long" : "";
                break;
            case "email":
                error.email = regularExpression.test(value)
                    ? ""
                    : "Email is not valid";
                break;
            case "password":
                error.password =
                    value.length < 5 ? "Password should 5 characters long" : "";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value
        })
    };

    render() {

        const { error } = this.state;

        return (
             <section className="contact">
                <div className="container-fluid p-0">
                    <div className="contact_container">
                        <h2 className="contact_head">QUICK CONTACT</h2>
                        <form action="">
                            <div className="row">
                                <div className="col-lg-4 col-12 contact1">
                                    <input required
                                type="name"
                                name="name"
                                className={error.name.length > 0 ? "wrong_input" : "input"}
                                onChange={this.formObject}
                             
                                 placeholder="Name"
                                />

                            {error.name.length > 0 && (
                                <span className="error">{error.name}</span>
                            )}
                                    <input required
                                type="email"
                                name="email"
                                className={error.email.length > 0 ? "wrong_input" : "input"}
                                onChange={this.formObject}
                              
                                placeholder="Email"
                                />

                            {error.email.length > 0 && (
                                <span className="error">{error.email}</span>
                            )}

                                    <input type="text" id="phone" name="phone" placeholder="Phone" className="input" />
                                </div>
                                <div className="col-lg-8 col-12 contact2">
                                    <textarea name="tarea" id="" cols="100" rows="6" className="tarea" placeholder="Message"></textarea>
                                </div>
                            </div>
                                    <input type="submit" value="Submit" className="submit" />
                        </form>
                    </div>
                </div>
            </section> 
        );
    }
}