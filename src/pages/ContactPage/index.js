import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

import "./ContactPage.css";

const ContactPage = (props) => {
  return (
    <div>
      <Header />
      <h3 className="title-container">GET IN TOUCH WITH ME</h3>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
