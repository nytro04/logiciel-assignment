import React from "react";

const PersonalInfoForm = () => {
  return (
    <div>
      <h1>Personal Information</h1>
      <div class="form-group row ">
        <label for="inputEmail3" class="col-sm-4 col-form-label">
          Name of the Skilled Craft Person
        </label>
        <div class="col-sm-6">
          <input type="email" class="form-control" id="inputEmail3" />
        </div>
      </div>

      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-4 pt-0">Gender</legend>
          <div class="col-sm-6">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label pr-5" for="gridRadios1">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label class="form-check-label" for="gridRadios2">
                Female
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <div class="form-group row">
        <label for="contact" class="col-sm-4 col-form-label">
          Contact Number
        </label>
        <div class="col-sm-6">
          <input type="email" class="form-control" id="contact" />
        </div>
      </div>

      <div class="form-group row">
        <label for="email" class="col-sm-4 col-form-label">
          Email Address
        </label>
        <div class="col-sm-6">
          <input type="email" class="form-control" id="email" />
        </div>
      </div>
      <div class="form-group row">
        <label for="digitalAddress" class="col-sm-4 col-form-label">
          Ghana Postal Digital Address
        </label>
        <div class="col-sm-6">
          <input type="email" class="form-control" id="digitalAddress" />
        </div>
      </div>

      <div className="text-right">
        <button type="submit" className="btn btn-primary">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
