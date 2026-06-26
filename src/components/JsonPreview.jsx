function JsonPreview({ formData }) {
  return (
    <section className="card json-card">
      <h2>JSON Preview</h2>

      <p>This preview converts form state into JSON format.</p>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </section>
  );
}

export default JsonPreview;