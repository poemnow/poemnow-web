import { useState, userState } from "react";

function ModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={handleModalClick}></button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClick}>
              닫기
            </span>
            <p>Modal Content</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalButton;
