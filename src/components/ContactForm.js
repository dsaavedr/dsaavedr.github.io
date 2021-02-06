import React, { Component } from "react";

import { Alert } from "reactstrap";
import { gsap } from "gsap";
import * as EmailValidator from "email-validator";

import Loading from "./Loading";

export default class ContactForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: "",
            email: "",
            emailValid: false,
            subject: "",
            message: "",
            success: true,
            visible: false,
            loading: false
        };

        this.element = null;

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.alertDismiss = this.alertDismiss.bind(this);
    }

    componentDidMount() {
        gsap.from(this.element, {
            autoAlpha: 0,
            ease: "out",
            duration: 1
        });
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

        const ev = EmailValidator.validate(this.state.email);

        this.setState({
            loading: true,
            emailValid: ev
        });

        if (ev) {
            // fetch("http://localhost:5000/send", {
            fetch("https://glacial-mesa-80370.herokuapp.com/send", {
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
                        this.setState(
                            {
                                success: true,
                                visible: true
                            },
                            this.showAlert
                        );
                    } else if (res.status === "fail") {
                        this.setState(
                            {
                                success: false,
                                visible: true
                            },
                            this.showAlert
                        );
                    }
                    this.setState({
                        loading: false
                    });
                })
                .catch(err => {
                    console.error(err);
                    this.setState({
                        success: false,
                        visible: true,
                        loading: false
                    });
                });
        } else {
            this.setState(
                {
                    success: false,
                    visible: true,
                    loading: false
                },
                this.showAlert
            );
        }
    }

    alertDismiss() {
        this.setState({
            visible: false
        });
    }

    render() {
        const form = (
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
                                required
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
                                required
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
                            required
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
        );

        const { loading } = this.state;

        return (
            <div id='contact-form' ref={div => (this.element = div)}>
                <div id='alertwrapper'>
                    <Alert
                        color={this.state.success && this.state.emailValid ? "primary" : "warning"}
                        isOpen={this.state.visible}
                        toggle={this.alertDismiss}
                    >
                        {!this.state.emailValid
                            ? "Please provide a valid email address."
                            : this.state.success
                            ? "Message sent!"
                            : "Message failed to send. Please contact me directly: danielsaavedram@hotmail.com"}
                    </Alert>
                </div>
                {loading ? <Loading msg='Sending' /> : form}
            </div>
        );
    }
}
