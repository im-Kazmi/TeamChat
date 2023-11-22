import React, { ReactElement, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  title: string | ReactElement;
  trigger: string | ReactElement;
  children?: string | ReactNode;
  isCompleted?: any;
}
const Modal = ({ title, trigger, children, isCompleted }: ModalProps) => {
  if (isCompleted) {
    return <div>{trigger}</div>;
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger>{trigger}</DialogTrigger>
        <DialogContent className=" bg-light-100 border-none dark:bg-dark-100 dark:text-light-200">
          <DialogHeader className=" flex w-full justify-center">
            <DialogTitle className=" mx-auto">{title}</DialogTitle>
            <DialogDescription className=" mx-auto">
              {children}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
