import Styled from "styled-components";
const PopupStyled = Styled.div`
.font-poppins {
    font-family: "Poppins";
}
`;

const Popup = ({ id, img, title, textButton, bgColor }) => {
  return (
    <PopupStyled>
      <div
        className="modal fade"
        id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content" style={{ background: bgColor }}>
            <div className="modal-body">
              <img src={img} alt="" className="img-fluid mb-3" />

              <h5 className="text-center font-poppins fw-semibold mb-3">
                {title}
              </h5>

              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  {textButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PopupStyled>
  );
};

export default Popup;
