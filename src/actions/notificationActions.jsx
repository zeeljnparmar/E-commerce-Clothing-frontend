import { toast } from "react-toastify";

export const success = (state, action) => {
  toast.success(action.payload.msg);
  return state;
};
