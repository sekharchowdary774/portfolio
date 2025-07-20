import React from "react";

const Contact = () => {
  return (
    <section id="contact">
       <div className="header-contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me using the details below.</p>
       </div>
      <div className="image-row">
        
          <a href="https://www.linkedin.com/in/kamma-somasekhar-24ba272b8/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linked.png" alt="LinkedIn" />
          <br/>
          LinkedIn</a>
          <a href="https://github.com/sekharchowdary774" target="_blank"  rel="noopener noreferrer">
           <img src="/images/git.png" alt="GitHub" />
          <br/>
          GitHub</a>
          <a href="mailto:sekharkamma5@gmail.com"  >
          <img src="/images/mail.png" alt="Email" />
          <br/>
          sekharkamma5@gmail.com</a>
        
      </div>
    </section>
  );
};

export default Contact;
