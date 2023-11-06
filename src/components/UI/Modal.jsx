const Modal = ({ winner, onClose }) => {
    return (
      <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            {winner === "R" ? "Player 1 Wins!" : "Player 2 Wins!"}
          </h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

export default Modal;