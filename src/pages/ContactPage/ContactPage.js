import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact</h1>
      <form
        className="row g-3 needs-validation m-5 p-2 border border-primary"
        novalidate
      >
        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Name"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="Last-Name"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="validationCustomUsername" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              placeholder="anonymus@gmail.com"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationCustom03" className="form-label">
            País
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            placeholder="Perú"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label for="validationCustom04" className="form-label">
            Departamento
          </label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled value="">
              Departamentos del Perú...
            </option>
            <option>Lima</option>
            <option>Amazonas</option>
            <option>Ancash</option>
            <option>Apurimac</option>
            <option>Arequipa</option>
            <option>Ayacucho</option>
            <option>Cajamarca</option>
            <option>Callao</option>
            <option>Cusco</option>
            <option>Huancavelica</option>
            <option>Huanuco</option>
            <option>Ica</option>
            <option>Junín</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label for="validationCustom05" className="form-label">
            Ciudad
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            placeholder="Lima"
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
