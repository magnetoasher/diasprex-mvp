/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck comment
import React from "react";
import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Field, Formik } from "formik";
import { Step4 } from "../auth/registration/components/steps/Step4";
import CheckingAccount from "../auth/registration/components/steps/CheckingAccount";
import {
  createAccountSchemas,
  inits,
} from "../auth/registration/components/CreateAccountWizardHelper";
const ImportantNoteComponent = () => {
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0]);
  const [initValues] = useState<ICreateAccount>(inits);
  const submitStep = (values: ICreateAccount, actions: FormikValues) => {};
  const onConfirm = () => {
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="col-xl-6">
      <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed h-lg-100 p-6">
        <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
          <div className="mb-3 mb-md-0 fw-bold">
            <h4 className="text-gray-900 fw-bolder">Important Note!</h4>
            <div className="fs-6 text-gray-700 pe-7">
              Please carefully read
              <a href="#" className="fw-bolder me-1">
                Product Terms
              </a>
              adding your new payment card
            </div>
          </div>

          <button
            className="btn btn-primary px-6 align-self-center text-nowrap"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Add Card
          </button>
          <Formik
            validationSchema={currentSchema}
            initialValues={initValues}
            onSubmit={submitStep}
          >
            <SweetAlert
              type={""}
              show={openModal}
              showCancel={false}
              confirmBtnText={"Submit"}
              title={""}
              onConfirm={onConfirm}
              onCancel={onCancel}
              focusCancelBtn
              cancelBtnText="No"
              confirmButtonClass="btn-success"
              cancelButtonClass="btn-danger"
            >
              <div className="d-flex  flex-column me-2">
                <div className="fv-row mb-10">
                  <div
                    role="group"
                    aria-labelledby="my-radio-group-1"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></div>
                </div>
                <Step4 />
              </div>
            </SweetAlert>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ImportantNoteComponent;
