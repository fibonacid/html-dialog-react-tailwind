import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type ModalProps = ComponentPropsWithoutRef<"dialog"> & {
  onClose: () => void;
};

export function Modal(props: ModalProps) {
  const { children, open, onClose, className, ...rest } = props;
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
    <dialog ref={ref} className={twMerge("group", className)} {...rest}>
      <div className="fixed inset-0 grid place-content-center bg-black/75 opacity-0 transition-all group-open:opacity-100">
        <div className="w-full max-w-lg scale-75 bg-white p-4 opacity-0 shadow-lg transition-all group-open:scale-100 group-open:opacity-100">
          {children}
        </div>
      </div>
    </dialog>
  );
}
