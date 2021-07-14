import { ToastOptions } from "react-toastify";

export const DRAG_TYPES = {
  CARD: "card",
};

export const ERROR_TOAST_PROPS: ToastOptions = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

export const SUCCESS_TOAST_PROPS: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};
