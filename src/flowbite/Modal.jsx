import { useState } from "react";

export default function Modal({ component, icon }) {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = (e) => {
    e.stopPropagation();
    setShowModal(prev => !prev);
  }

  const closeModal = (e) => {
    e.stopPropagation();
    if (showModal) setShowModal(false);
  }

  // this is a template for all modals, to show/hide them
  return (
    <div onClick={closeModal}>
      <button
        onClick={toggleModal}
      >{icon}</button>
      {/* Modal Here */}
      <div 
        className={`absolute flex items-center justify-center h-[100%] w-[100%] bg-[rgba(0,0,0,0.4)] z-[5] left-0 top-0 ${ showModal ? "block" : "hidden"}`}>
        {/* component to include in the modal goes here */}
        {component}
      </div>
    </div>
  )
}