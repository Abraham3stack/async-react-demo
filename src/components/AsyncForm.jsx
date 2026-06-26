import { useState } from "react";

function AsyncForm({ formData, setFormData }) {
  const [status, setStatus] = useState("idle");

  const fakeSubmitRequest = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Form submitted successfully.",
          submittedData: data,
        });
      }, 1200);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("loading");

    const htmlFormData = new FormData(event.target);

    const dataObject = {
      name: htmlFormData.get("name"),
      email: htmlFormData.get("email"),
      message: htmlFormData.get("message"),
    };

    try {
      const response = await fakeSubmitRequest(dataObject);

      if (response.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="card form-card" onSubmit={handleSubmit}>
      <h2>Async Form Submission</h2>

      <input
        type="text"
        name="name"
        placeholder="Full name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Form"}
      </button>

      {status === "success" && (
        <p className="success">Promise resolved: form submitted successfully.</p>
      )}

      {status === "error" && (
        <p className="error">Promise rejected: submission failed.</p>
      )}
    </form>
  );
}

export default AsyncForm;