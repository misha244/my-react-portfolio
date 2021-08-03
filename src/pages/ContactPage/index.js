import CropHeader from "../../components/CropHeader";
import ContactForm from "../../components/ContactForm";

import "./ContactPage.css";

const ContactPage = (props) => {
  return (
    <div>
      <CropHeader />
      <h3 className="title-container">GET IN TOUCH WITH ME</h3>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
