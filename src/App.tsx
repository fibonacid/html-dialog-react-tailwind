import { useState } from "react";
import Modal from "./Step3";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="m-4 underline outline-none focus-visible:ring"
        onClick={() => setOpen(true)}
        aria-controls="modal"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
      >
        Open modal
      </button>
      <Modal id="modal" open={open} onClose={() => setOpen(false)}>
        <h2 id="modal-title" className="mb-1 text-lg font-bold">
          Modal
        </h2>
        <p id="modal-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab optio
          totam nihil eos, dolor aut maiores, voluptatum reprehenderit sit
          incidunt culpa? Voluptatum corrupti blanditiis nihil voluptatem atque,
          dolor ducimus! Beatae.
        </p>
        <button
          autoFocus={true}
          className="float-right underline outline-none focus-visible:ring"
          onClick={() => setOpen(false)}
          aria-label="Close modal"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default App;
