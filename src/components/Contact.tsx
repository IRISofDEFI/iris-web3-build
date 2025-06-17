
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-2xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-800 rounded focus:border-gray-600 focus:outline-none transition-colors"
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="hi@yourcompany.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-800 rounded focus:border-gray-600 focus:outline-none transition-colors"
              required
            />
          </div>
          
          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-800 rounded focus:border-gray-600 focus:outline-none transition-colors resize-none"
            required
          />
          
          <button
            type="submit"
            className="w-full py-3 bg-white text-black rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Send the message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
