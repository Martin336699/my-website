import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = ({theme}) => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    try {
      let response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText('Send');
      let result = await response.json();
      console.log(result); // Log the result to debug
      setFormDetails(formInitialDetails);
      if (response.ok && result.message === 'Email sent successfully') { // Check for the message property
        setStatus({ success: true, message: 'Message sent successfully.' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      setButtonText('Send');
      setStatus({ success: false, message: 'There was an error sending your message. Please try again later.' });
      console.error('Error:', error);
    }
  };

  return (
    <section className={`contact ${theme}`} id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="inputField">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={e => onFormUpdate('firstName', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="inputField">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={e => onFormUpdate('lastName', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="inputField">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={e => onFormUpdate('email', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="inputField">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={e => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={e => onFormUpdate('message', e.target.value)}
                    required
                  ></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};