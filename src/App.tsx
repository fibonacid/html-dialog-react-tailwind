import { useState } from "react";
import { Modal } from "./components/Step2";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
