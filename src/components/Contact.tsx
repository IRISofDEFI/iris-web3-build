const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Get In Touch With Me
        </h2>

        <form
          action="https://formspree.io/f/movwlrgp"
          method="POST"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:border-blue-500 focus:outline-none transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:border-blue-500 focus:outline-none transition"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message..."
            rows={6}
            className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:border-blue-500 focus:outline-none transition resize-none"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-md transition"
          >
            Send the message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

