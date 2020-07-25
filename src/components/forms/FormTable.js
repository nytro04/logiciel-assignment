import React, { Component } from "react";

class FormTable extends Component {
  render() {
    return (
      <div>
        <form className="card p-3 bg-light">
          <div className="row">
            <label className="col-sm-1">1</label>
            <label className="col-sm-5">PERSONAL INFORMATION</label>
          </div>
          <div class="form-group row">
         
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              Name of the Skilled Craft Person
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-1 pt-0">1b</legend>
              <legend class="col-form-label col-sm-5 pt-0">Gender</legend>
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
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              1c
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              Contact Number
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              1d
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              Email Address
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              1e
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              Ghana Postal Digital Address
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row">
            <label className="col-sm-1">2</label>
            <label className="col-sm-5">BUSINESS INFORMATION</label>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              2a
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              Business Name
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              2b
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              Location Of Business
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              2c
            </label>
            <div class="col">
              <input type="text" class="form-control" placeholder="Town:" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="District:" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Region:" />
            </div>
          </div>

          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-1 pt-0">2d</legend>
              <legend class="col-form-label col-sm-5 pt-0">
                Is your business registered?
              </legend>
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
                    Yes
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
                    No
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              2e
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              If yes, State your business registration number
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>

          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-1 pt-0">2f</legend>
              <legend class="col-form-label col-sm-5 pt-0">
                Do you have a business TIN number?
              </legend>
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
                    Yes
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
                    No
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              2g
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              If yes, State your business TIN number
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>

          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-1 pt-0">2h</legend>
              <legend class="col-form-label col-sm-5 pt-0">
                Are you a member of a trade association in your locality?
              </legend>
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
                    Yes
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
                    No
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-1 pt-0">2i</legend>
              <legend class="col-form-label col-sm-5 pt-0">
                Do you have NVTI certification
              </legend>
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
                    Yes
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
                    No
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-1 pt-0">2j</legend>
              <legend class="col-form-label col-sm-5 pt-0">
                Have you received any support from NBSSI?
              </legend>
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
                    Yes
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
                    No
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-1 pt-0">2k</legend>
              <legend class="col-form-label col-sm-5 pt-0">
                If no, would you want to receive support from NBSSI?
              </legend>
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
                    Yes
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
                    No
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              2l
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              If yes, what kind of support would you need from NBSSI?
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              2m
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              How many years have you been a Skilled Craft Person?
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>

          <div className="row">
            <label className="col-sm-1">3</label>
            <label className="col-sm-5">TRAINING EXPERIENCE</label>
          </div>

          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-1 pt-0">3a</legend>
              <legend class="col-form-label col-sm-5 pt-0">
                Have you trained apprentices before?
              </legend>
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
                    Yes
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
                    No
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-1 pt-0">3b</legend>
              <legend class="col-form-label col-sm-5 pt-0">
                If no, would you like to train apprentices?
              </legend>
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
                    Yes
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
                    No
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              3c
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              How many apprentices can you take on at a time?
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              3d
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              What additional support would you need from NBSSI to be able train
              apprentices?
            </label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">
              3d
            </label>
            <label for="inputEmail3" class="col-sm-5 col-form-label">
              Please state any other relevant information about the Skilled
              Craft Person
            </label>
            <div class="col-sm-6">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>

          <h5 className="font-weight-bold">FOR OFFICIAL USE ONLY</h5>

          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FormTable;
