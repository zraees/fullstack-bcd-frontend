import { Toast, ToastContainer } from "react-bootstrap";
import { IToastProps } from "../../types/types";

const CustomToast: React.FC<IToastProps> = ({
  show,
  onClose,
  title,
  message,
}) => {
  return (
    <ToastContainer position="top-end">
      <Toast show={show} onClose={onClose} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
