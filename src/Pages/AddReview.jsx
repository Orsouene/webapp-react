import { useState } from "react";
// importo acios
import axios from "axios";
import Form from "../Components/Form";
const newReview = {
  name: "",
  text: "",
  vote: 0,
};

// Dichiaro il mio URL
const apiUrl = import.meta.env.VITE_API_URL;
const endPoint = "/movies";

function AddReview({ Movie_id, reloadReview }) {
  const [formData, setFormData] = useState(newReview);
  const [formValidated, setIsFormValidated] = useState(true);

  function validateForm() {
    if (!formData.name || !formData.text) return false;
    if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 10)
      return false;
    return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setIsFormValidated(false);
      return;
    }
    // console.log(`${apiUrl}${endPoint}/${Movie_id}/reviews`, formData);
    // console.log("le dati del Form", formData);
    // console.log("id del movie", Movie_id);
    axios
      .post(`${apiUrl}${endPoint}/${Movie_id}/reviews`, formData)
      .then((res) => {
        console.log(" la mia resposta è " + res);
        setFormData(newReview);
        // setIsFormValidated(true);
        reloadReview();
        setIsFormValidated(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finito");
      });
  };

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      {!formValidated && (
        <div className="error">
          <div className="error__icon">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
                fill="#393a37"
              ></path>
            </svg>
          </div>
          <div className="error__title">Something went wrong</div>
          <div className="error__close">
            <svg
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                fill="#393a37"
              ></path>
            </svg>
          </div>
        </div>
      )}
      <Form
        handleSubmit={handleSubmit}
        setFieldValue={setFieldValue}
        formData={formData}
      />
    </div>
  );
}
export default AddReview;
