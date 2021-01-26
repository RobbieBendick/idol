import Modal from "react-modal";
import { useState } from "react";
import "./ContactModal.scss";

function ContactModal() {
  const [modalToggle, setModalToggle] = useState(false);

  Modal.setAppElement("#root");

  return (
    <div className="bottomRight">
      <button
        style={{
          width: "150px",
          height: "50px",
          borderRadius: "25px",
          border: "none",
        }}
        onClick={() => setModalToggle(!modalToggle)}
      >
        Contact Us!
      </button>
      <Modal
        className="modal-position"
        isOpen={modalToggle}
        onRequestClose={() => setModalToggle(!modalToggle)}
        style={{
          content: {
            textAlign: "center",
            backgroundColor: "grey",
            width: "400px",
            height: "700px",
          },
        }}
      >
        <button
          style={{
            borderRadius: "15px",
            position: "relative",
            left: "43%",
            top: "2%",
            width: "40px",
            color: "#fff",
            border: "none",
            backgroundColor: "grey",
          }}
          onClick={() => setModalToggle(!modalToggle)}
        >
          <i class="fas fa-times"></i>
        </button>
        <h2 style={{ marginBottom: "50px" }}>Contact Us!</h2>
        <form action="">
          <input
            style={{
              border: "none",
              display: "in-block",
              width: "90%",
              textAlign: "center",
              borderRadius: "25px",
            }}
            type="text"
            placeholder="Your Email Address"
          ></input>
          <label
            for="textarea-message"
            style={{ marginTop: "400px", marginBottom: "10px" }}
          >
            Message
          </label>
          <textarea
            style={{
              borderRadius: "25px",
              display: "in-block",
              width: "90%",
              height: "90%",
              textAlign: "center",
            }}
            type="text"
            placeholder="Compose Your Message"
          ></textarea>
        </form>
      </Modal>
    </div>
  );
}

export default ContactModal;
