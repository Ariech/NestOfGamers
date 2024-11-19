import { ModalProps } from "../../interfaces/interfaces";

export const Modal = ({ isOpen, onClose, children, onReset }: ModalProps) => {
  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-shadowDark bg-opacity-95 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-cardBg rounded-lg shadow-lg p-8 relative w-full max-w-md flex flex-col "
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-5 text-textPrimary hover:text-gray-600 text-2xl font-bold "
            onClick={onClose}
          >
            x
          </button>
          {children}
          <button
            className="mt-2 bg-shadowDark text-accentSilver px-4 py-2 rounded-lg font-medium hover:bg-highlight transition-colors duration-500 m-4"
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      </div>
    )
  );
};
