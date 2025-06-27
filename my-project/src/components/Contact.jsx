export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[80vh] bg-[#fff6f1] text-gray-800 pt-20 pb-0 px-6 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        <span className="text-orange-500">Contact</span> Me
      </h2>

      <form
        action="https://formspree.io/f/xjkrjykb"
        method="POST"
        className="max-w-2xl mx-auto space-y-6"
      >
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-md border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-md border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-md border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-500 text-white font-medium px-8 py-2 rounded-md shadow-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
