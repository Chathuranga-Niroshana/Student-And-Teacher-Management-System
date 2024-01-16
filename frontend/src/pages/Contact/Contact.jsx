
import "./Contact.css";

function Contact() {


  return (
    <>
      <h1>Contact</h1>
      <div className="contactContainer">
        <h3>J. M. Chathuranga Niroshana</h3>
        <h4>BSc. Software Engineering,</h4>
        <h4>Malabe,</h4>
        <h4>CINEC Campus</h4>
        <h4>Sri Lanka</h4>

        <div className="linkContainer">
          <a href="mailto:niroshana.c.n.j@gmail.com">Email</a>
          <br />
          <a href="https://www.linkedin.com/in/chathuranga-niroshana-651122252/">
            linkedIn
          </a>
        </div>
      </div>
      {/* <div className="commentArea">
        <textarea
          name="comments"
          id="contact"
          cols="50"
          rows="10"
          placeholder="Enter Your Comments"
        />
        <button>Send</button>
      </div> */}
    </>
  );
}

export default Contact;
