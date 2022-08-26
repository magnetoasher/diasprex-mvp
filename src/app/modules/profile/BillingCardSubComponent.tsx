import ImportantNoteComponent from "./ImportantNoteComponent";
const BillingCardSubComponent = () => {
  return (
    <div className="row gx-9 gy-6">
      <div className="col-xl-6">
        <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
          <div className="d-flex flex-column py-2">
            <div className="d-flex align-items-center fs-4 fw-bolder mb-5">
              <span className="badge badge-light-success fs-7 ms-2">
                Primary
              </span>
            </div>

            <div className="d-flex align-items-center">
              <img
                src="assets/media/svg/card-logos/visa.svg"
                alt=""
                className="me-4"
              />

              <div>
                <div className="fs-4 fw-bolder">Visa **** 1679</div>
                <div className="fs-6 fw-bold text-gray-400">
                  Card expires at 09/24
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center py-2">
            <button
              type="reset"
              className="btn btn-sm btn-light btn-active-light-primary me-3"
            >
              Delete
            </button>
            <button
              className="btn btn-sm btn-light btn-active-light-primary"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_new_card"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <ImportantNoteComponent />
    </div>
  );
};

export default BillingCardSubComponent;
