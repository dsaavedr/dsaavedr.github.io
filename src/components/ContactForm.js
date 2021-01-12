import React, { Component } from "react";

export default class ContactForm extends Component {
    constructor(props) {
        super();

        this.state = {
            from: "",
            email: "",
            name: "",
            message: ""
        };
    }

    render() {
        return (
            <div id='contact-form'>
                <form action='./contactform.php' method='post'>
                    <div className='body'>
                        <div id='header'>
                            <div className='row'>
                                <label className='form-label' htmlFor='name'>
                                    Full name
                                </label>
                                <input className='form-control' type='text' name='name' />
                            </div>
                            <div className='row'>
                                <label className='form-label' htmlFor='mail'>
                                    Your e-mail
                                </label>
                                <input className='form-control' type='email' name='mail' />
                            </div>
                            <div className='row'>
                                <label htmlFor='subject' className='form-label'>
                                    Subject
                                </label>
                                <input className='form-control' type='text' name='subject' />
                            </div>
                        </div>
                        <div id='message'>
                            <label htmlFor='message' className='form-label'>
                                Message
                            </label>
                            <textarea name='message'></textarea>
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
