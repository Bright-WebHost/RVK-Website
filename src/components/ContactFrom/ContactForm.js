import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({ className: 'errorMessage' }));

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setForms({ ...forms, [name]: value });

        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (validator.allValid()) {
            validator.hideMessages();

            const message = `*Contact Form Submission*\n` +
                `*Name:* ${forms.name}\n` +
                `*Email:* ${forms.email}\n` +
                `*Phone:* ${forms.phone}\n` +
                `*Subject:* ${forms.subject}\n` +
                `*Message:* ${forms.message}`;

            const phoneNumber = '918197256135';
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, '_blank');

            // Reset form
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={submitHandler} className="contact-validation-active">
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="Your Name"
                        />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>

                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="Your Email"
                        />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>

                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="text"
                            name="phone"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="Your Phone"
                        />
                        {validator.message('phone', forms.phone, 'required|numeric')}
                    </div>
                </div>

                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            value={forms.subject}
                            name="subject"
                        >
                            <option value="">Select Product</option>
                            <option>HVAC DUCTS</option>
                            <option>ELEMENTZ WALL MOUNT BRACKET</option>
                            <option>CABLE TRAY</option>
                            <option>POP GRIPFRAMES</option>
                            <option>HYBRID POWDER COATING</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>

                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={changeHandler}
                        onChange={changeHandler}
                        value={forms.message}
                        name="message"
                        placeholder="Message"
                    ></textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>

            <div className="submit-area">
                <button type="submit" className="theme-btn">Submit Now</button>
            </div>
        </form>
    );
};

export default ContactForm;
