import { forwardRef, useImperativeHandle, useState } from "react";
import "./Modal.css";
type ModalProps = {
  gameStatus: string;
  solution: string;
  handleGameReset: () => void;
};

export type ModalHandle = {
  openModal: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ gameStatus, solution, handleGameReset }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      openModal() {
        setIsOpen(true);
      },
    }));

    const onClose = () => {
      setIsOpen(false);
      handleGameReset();
    };

    if (!isOpen) return null;

    return (
      <div className="backdrop">
        <div className="modal">
          <p>{gameStatus}</p>
          <p>The word was: {solution}</p>
          <button onClick={onClose}>Play Again?</button>
        </div>
      </div>
    );
  }
);

export default Modal;
