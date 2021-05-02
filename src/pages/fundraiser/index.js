import React, { useEffect, useState } from "react";
import { Stepper } from "@progress/kendo-react-layout";
import { Loader } from "@progress/kendo-react-indicators";
import { Notification } from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";
import BasicDetails from "./steppers/basic-details";
import CauseDetails from "./steppers/cause-details";
import ElaborateCauseDetails from "./steppers/elaborate-cause-details";
import Preview from "./steppers/preview";
import Done from "./steppers/done";
import { create } from "../../_services/events";

const items = [
  // { label: "Who is this for ?", icon: "k-i-info" },
  { label: "Basic Details", icon: "k-i-user" },
  { label: "Cause Details", icon: "k-i-dollar" },
  { label: "Elborate Cause Details", icon: "k-i-txt" },
  { label: "Preview", icon: "k-i-eye" },
  { label: "Done", icon: "k-i-check" },
];

const Fundraiser = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fundraiser, setFundraiser] = useState({});

  const handleChange = (e) => {
    setStep(e.value);
  };

  useEffect(() => {
    localStorage.setItem("fundraiser", JSON.stringify(fundraiser));
  }, [fundraiser]);

  useEffect(() => {
    let data = localStorage.getItem("fundraiser");
    if (Object.keys(data).length > 0) {
      setFundraiser(JSON.parse(data));
    }
  }, []);

  const handleBasicDetailsSubmit = (e) => {
    setFundraiser({ ...fundraiser, basic_details: { ...e } });
    setStep(1);
  };

  const handleCauseDetailsSubmit = (e) => {
    setFundraiser({ ...fundraiser, cause_details: { ...e } });
    setStep(2);
  };

  const handleElaborateCauseDetailsSubmit = (e) => {
    setFundraiser({ ...fundraiser, elaborate_cause_details: { ...e } });
    setStep(3);
  };

  const handlePreviewSubmit = () => {
    setLoading(true);
    create(fundraiser)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setStep(4);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return (
    <div className="mt-12 w-full container mx-auto sm:m-12 sm:mx-auto sm:w-1/2">
      <Stepper
        value={step}
        onChange={handleChange}
        items={items}
        linear={true}
        className="z-30"
      />
      {loading && (
        <div className="z-100 flex justify-center">
          <Loader size="large" type={"converging-spinner"} />
        </div>
      )}
      {step === 0 && (
        <BasicDetails handleBasicDetailsSubmit={handleBasicDetailsSubmit} />
      )}
      {step === 1 && (
        <CauseDetails handleCauseDetailsSubmit={handleCauseDetailsSubmit} />
      )}
      {step === 2 && (
        <ElaborateCauseDetails
          handleElaborateCauseDetailsSubmit={handleElaborateCauseDetailsSubmit}
        />
      )}
      {step === 3 && (
        <Preview data={fundraiser} handlePreviewSubmit={handlePreviewSubmit} />
      )}
      {step === 4 && <Done />}
      <Fade enter={true} exit={true}>
        {error && (
          <Notification
            type={{ style: "error", icon: true }}
            closable={true}
            onClose={() => setError(false)}
          >
            <span>Oops! Something went wrong ...</span>
          </Notification>
        )}
      </Fade>
    </div>
  );
};

export default Fundraiser;
