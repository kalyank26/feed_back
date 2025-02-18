import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [feedbacks, setFeedbacks] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("https://feed-back-zh98.onrender.com/feedback");
      setFeedbacks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setMessage("All fields are required");
      return;
    }
    try {
      await axios.post("https://feed-back-zh98.onrender.com/feedback", formData);
      setMessage("Feedback submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      fetchFeedbacks();
    } catch (err) {
      console.error(err);
      setMessage("Error submitting feedback");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Feedback Form</h1>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <textarea
          placeholder="Your feedback"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Submit Feedback
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-6">Feedbacks</h2>
      <div className="w-full max-w-lg mt-4">
        {feedbacks.map((fb) => (
          <div key={fb._id} className="bg-white p-4 rounded shadow-md mb-2">
            <p className="font-bold">{fb.name} ({fb.email})</p>
            <p>{fb.message}</p>
            <p className="text-sm text-gray-500">{new Date(fb.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
