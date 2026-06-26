import { useState } from "react";
import "./App.css";
import AsyncForm from "./components/AsyncForm";
import JsonPreview from "./components/JsonPreview";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <main className="app">
      <section className="hero">
        <h1>Async React Demo</h1>
        <p>
          Task 6 - Demonstrating JSON, FormData, Promises, and async/await in
          React.
        </p>
      </section>

      <section className="layout">
        <AsyncForm formData={formData} setFormData={setFormData} />
        <JsonPreview formData={formData} />
      </section>
    </main>
  );
}

export default App;