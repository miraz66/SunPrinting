import { useRef, useEffect } from "react";

const Modal = ({ children, onClose, className }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Function to close the modal when clicking outside
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={className}>
      <div ref={modalRef} className="rounded shadow-md">
        {children}
      </div>
    </div>
  );
};

//fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900

export default Modal;
