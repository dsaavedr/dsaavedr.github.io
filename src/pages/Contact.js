import React from "react";

import ContactForm from "../components/ContactForm";
import MainSection from "../components/MainSection";

export default function Contact() {
    return (
        <div className='sections-wrapper'>
            <MainSection title='Contact Me'>
                <ContactForm />
            </MainSection>
        </div>
    );
}
