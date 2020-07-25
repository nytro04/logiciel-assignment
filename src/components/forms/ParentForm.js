import React, { Component } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import BusinessInfoForm from "./BusinessInfoForm";
import TrainingInfoForms from "./TrainingInfoForms";
import PreviewDetails from "./PreviewDetails";
import FormSuccessFail from "./FormSuccessFail";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

class ParentForm extends Component {
  //   checkValidation = (errors, touched) => {
  //     if (!!errors) {
  //       return <Form.Control.Feedback>{errors}</Form.Control.Feedback>;
  //     } else if (touched && !errors) {
  //       return <Form.Control.Feedback>Looks great </Form.Control.Feedback>;
  //     }
  //   };

  state = {
    step: 1,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };
  render() {
    const initialValues = {
      name: "",
      gender: "",
      contact: "",
      email: "",
      ghPostNumber: "",
      businessName: "",
      businessLocation: "",
      town: "",
      district: "",
      region: "",
      registeredBusiness: "",
      businessRegNumber: "",
      TINRegistered: "",
      TINNumber: "",
      tradeAssociation: "",
      NVTICert: "",
      receivedNBSSISupport: "",
      wantNBSSISupport: "",
      NBSSISupportType: "",
      craftExperience: "",
      trainedApprentices: "",
      likeToTrainApprentices: "",
      apprenticesNumber: "",
      additionalNBSSISupport: "",
      otherRelevantInfo: "",
      signature: "",
      date: "",
      reportingOfficer: "",
      officerPosition: "",
      officerContact: "",
      officerRecommendation: "",
    };

    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(100, "Names must not be more 100 characters")
        .required("Name is required"),
      gender: Yup.string().required("Name is required"),
      contact: Yup.string()
        .min(10, "Phone number must be at least 10 characters")
        .max(10, "Phone number must not be more 10 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Must be a valid email address")
        .max(100, "Email must be less than 100 characters")
        .required("Email is required"),
      ghPostNumber: Yup.string().required("Ghana Post number is required"),
      businessName: Yup.string().required("Business is required"),
      businessLocation: Yup.string().required("Business location is required"),
      town: Yup.string().required("Town is required"),
      district: Yup.string().required("District is required"),
      region: Yup.string().required("Region is required"),
      registeredBusiness: Yup.string().required("Please select an option"),
      businessRegNumber: Yup.string().required(
        "Business Registration number is required"
      ),
      TINRegistered: Yup.string().required("Please select an option"),
      TINNumber: Yup.string().required("TIN number is required"),
      tradeAssociation: Yup.string().required("Please select an option"),
      NVTICert: Yup.string().required("Please select an option"),
      receivedNBSSISupport: Yup.string().required("Please select an option"),
      wantNBSSISupport: Yup.string().required("Please select an option"),
      NBSSISupportType: Yup.string().required("NBSSI Support Type is required"),
      craftExperience: Yup.string().required("Years of experience is required"),
      trainedApprentices: Yup.string().required("Please select an option"),
      likeToTrainApprentices: Yup.string().required("Please select an option"),
      apprenticesNumber: Yup.string().required(
        "Apprentices number is required"
      ),
      additionalNBSSISupport: Yup.string().required(
        "Additional support field is required"
      ),
      otherRelevantInfo: Yup.string().required(
        "Other relevant field is required"
      ),
      signature: Yup.string().required("Signature field is required"),
      date: Yup.date().required("Date field is required"),
      reportingOfficer: Yup.string().required(
        "Reporting Officer field is required"
      ),
      officerPosition: Yup.string().required(
        "Reporting Officer Position field is required"
      ),
      officerContact: Yup.string().required(
        "Reporting Officer Contact field is required"
      ),
      officerRecommendation: Yup.string().required(
        "Reporting Officer Recommendation field is required"
      ),
    });

    const { step } = this.state;
    const {
      name,
      gender,
      contact,
      email,
      ghPostNumber,
      businessName,
      locationOfBusiness,
      town,
      district,
      region,
      registeredBusiness,
      businessRegNumber,
      TINRegistered,
      TINNumber,
      tradeAssociation,
      NVTICert,
      receivedNBSSISupport,
      wantNBSSISupport,
      NBSSISupportType,
      craftExperience,
      trainedApprentices,
      likeToTrainApprentices,
      apprenticesNumber,
      additionalNBSSISupport,
      otherRelevantInfo,
      signature,
      date,
      reportingOfficer,
      officerContact,
      officerPostion,
      officerRecommendation,
    } = this.state;
    const values = {
      name,
      gender,
      contact,
      email,
      ghPostNumber,
      businessName,
      locationOfBusiness,
      town,
      district,
      region,
      registeredBusiness,
      businessRegNumber,
      TINRegistered,
      TINNumber,
      tradeAssociation,
      NVTICert,
      receivedNBSSISupport,
      wantNBSSISupport,
      NBSSISupportType,
      craftExperience,
      trainedApprentices,
      likeToTrainApprentices,
      apprenticesNumber,
      additionalNBSSISupport,
      otherRelevantInfo,
      signature,
      date,
      reportingOfficer,
      officerContact,
      officerPostion,
      officerRecommendation,
    };

    let stepCurrentForm;

    if (step === 1) {
      stepCurrentForm = (
        <PersonalInfoForm
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      );
    } else if (step === 2) {
      stepCurrentForm = (
        <BusinessInfoForm
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      );
    } else if (step === 3) {
      stepCurrentForm = (
        <TrainingInfoForms
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      );
    } else if (step === 4) {
      stepCurrentForm = (
        <PreviewDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      );
    } else if (step === 5) {
      stepCurrentForm = <FormSuccessFail />;
    } else {
      stepCurrentForm = <h5>Loading...</h5>;
    }

    return (
      <div className="container justify-content-center">
        <Formik initialValues={}></Formik>
        <form className="card p-3 bg-light">{stepCurrentForm}</form>
      </div>
    );
  }
}

export default ParentForm;
