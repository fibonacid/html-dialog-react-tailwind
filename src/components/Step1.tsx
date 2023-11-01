import { type ComponentPropsWithoutRef } from "react";

export type ModalProps = ComponentPropsWithoutRef<"dialog">;

export function Modal(props: ModalProps) {
  const { children, ...rest } = props;
  return <dialog {...rest}>{children}</dialog>;
}
