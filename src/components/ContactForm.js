import React, { Component } from "react";

export default class ContactForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
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
        console.log(this.state);
    }

    render() {
        return (
            <div id='contact-form'>
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
                                    onChange={this.onSubjectChange}
                                />
                            </div>
                        </div>
                        <div id='message'>
                            <label htmlFor='message' className='form-label'>
                                Message
                            </label>
                            <textarea name='message' onChange={this.onMessageChange}></textarea>
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
