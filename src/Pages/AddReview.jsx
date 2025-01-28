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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${apiUrl}${endPoint}/${Movie_id}/reviews`, formData);
    // console.log("le dati del Form", formData);
    // console.log("id del movie", Movie_id);
    axios
      .post(`${apiUrl}${endPoint}/${Movie_id}/reviews`, formData)
      .then((res) => {
        console.log(" la mia resposta è " + res);
        setFormData(newReview);
        reloadReview();
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
      <Form
        handleSubmit={handleSubmit}
        setFieldValue={setFieldValue}
        formData={formData}
      />
    </div>
  );
}
export default AddReview;
