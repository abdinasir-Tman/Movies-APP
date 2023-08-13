// import React from 'react'
import { useState } from "react";
import Modal from "react-modal";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
function Model({ code, setCode, isTrue }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(isTrue);
  console.log();
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setCode("");
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        className="p-10 flex justify-center items-center h-screen"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button
          className="absolute top-10 right-12 text-white text-4xl"
          onClick={closeModal}
        >
          &times;
        </button>
        {/* <div className="w-full"> */}
        <iframe
          id="main"
          allowFullScreen
          // width="100"
          className="w-full h-full"
          // height="100"
          src={`https://www.youtube.com/embed/${code}?mute=1&autoplay=true`}
        ></iframe>
        {/* </div> */}
      </Modal>
    </div>
  );
}

export default Model;
