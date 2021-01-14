import React, { Component } from "react";

import { Alert } from "reactstrap";

export default class ContactForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            success: true,
            visible: false
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.alertDismiss = this.alertDismiss.bind(this);
    }

    resetForm() {
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onSubjectChange(e) {
        this.setState({
            subject: e.target.value
        });
    }

    onMessageChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:5000/send", {
            // fetch("https://glacial-mesa-80370.herokuapp.com/send", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === "success") {
                    this.resetForm();
                    // alert("Message sent!");
                    this.setState({
                        success: true,
                        visible: true
                    });
                    this.showAlert();
                } else if (res.status === "fail") {
                    // alert(
                    //     "Message failed to send. Please contact me directly: danielsaavedram@hotmail.com"
                    // );
                    this.setState({
                        success: false,
                        visible: true
                    });
                    this.showAlert();
                }
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    success: false,
                    visible: true
                });
            });
    }

    alertDismiss() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div id='contact-form'>
                <div id='alertwrapper'>
                    <Alert
                        color={this.state.success ? "primary" : "warning"}
                        isOpen={this.state.visible}
                        toggle={this.alertDismiss}
                    >
                        {this.state.success
                            ? "Message sent!"
                            : "Message failed to send. Please contact me directly: danielsaavedram@hotmail.com"}
                    </Alert>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)} method='POST'>
                    <div className='body'>
                        <div id='header'>
                            <div className='row'>
                                <label className='form-label' htmlFor='name'>
                                    Full name
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className='row'>
                                <label className='form-label' htmlFor='mail'>
                                    Your e-mail
                                </label>
                                <input
                                    className='form-control'
                                    type='email'
                                    name='mail'
                                    value={this.state.email}
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className='row'>
                                <label htmlFor='subject' className='form-label'>
                                    Subject
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='subject'
                                    value={this.state.subject}
                                    onChange={this.onSubjectChange}
                                />
                            </div>
                        </div>
                        <div id='message'>
                            <label htmlFor='message' className='form-label'>
                                Message
                            </label>
                            <textarea
                                name='message'
                                value={this.state.message}
                                onChange={this.onMessageChange}
                            ></textarea>
                        </div>
                    </div>
                    <button
                        className='btn-primary'
                        name='submit'
                        style={{ color: "black" }}
                        type='submit'
                    >
                        Send
                    </button>
                </form>
            </div>
        );
    }
}
