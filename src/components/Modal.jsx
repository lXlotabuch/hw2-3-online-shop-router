import PropTypes from "prop-types";

import "./Modal.scss";

const Modal = ({
  deleteModal,
  header,
  closeBtn,
  text,
  actions,
}) => {
  return (
    <div>
    <div className="modal-background" onClick={deleteModal}></div>
      <div className="modal">
        <div className="modal-header">
          <p className="header-name">{header}</p>
          {closeBtn && (
            <a href="#" className="btn-close" onClick={deleteModal}>
              X
            </a>
          )}
        </div>
        <div className="modal-content">
          <p className="content-text">{text}</p>
          {actions}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  deleteModal: PropTypes.func,
  header: PropTypes.string,
  closeBtn: PropTypes.bool,
  text: PropTypes.string,
  actions: PropTypes.element,  
}

Modal.defaultProps = {
  closeBtn: true,
}

export default Modal;
