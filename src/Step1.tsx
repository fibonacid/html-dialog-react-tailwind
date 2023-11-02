import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";

export type ModalProps = ComponentPropsWithoutRef<"dialog"> & {
  onClose: () => void;
};

export default function Modal(props: ModalProps) {
  const { children, open, onClose, ...rest } = props;
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current!;
    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = ref.current!;
    const handler = (e: Event) => {
      e.preventDefault();
      onClose();
    };
    dialog.addEventListener("close", handler);
    dialog.addEventListener("cancel", handler);
    return () => {
      dialog.removeEventListener("close", handler);
      dialog.removeEventListener("cancel", handler);
    };
  }, [onClose]);

  return (
    <dialog ref={ref} {...rest}>
      {children}
    </dialog>
  );
}
