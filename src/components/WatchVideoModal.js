// src/components/WatchVideoModal.js
import React from "react";
import { IoMdClose } from "react-icons/io";

const WatchVideoModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <IoMdClose />
        </button>
        <div className="video-container">
          
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gcO9hzrCs5g?si=iZiQU3mrSS0WZHYJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
        </div>
      </div>
    </div>
  );
};

export default WatchVideoModal;
