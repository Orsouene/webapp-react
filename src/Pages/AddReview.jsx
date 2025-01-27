import { useState } from "react";
import Form from "../Components/Form";
const newReview = {
  name: "",
  review: "",
  vote: 0,
};

function AddReview({ Movie_id }) {
  const [formData, setFormData] = useState(newReview);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("le dati del Form", formData);
    console.log("id del movie", Movie_id);
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
