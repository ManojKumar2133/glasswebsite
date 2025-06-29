export default function Contact() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-2xl bg-white">
      <h1 className="text-4xl font-bold mb-4 text-[#a31515]">Contact Us</h1>
      <p className="text-lg text-gray-900 mb-6">
        Get in touch for a free quote or to ask about our services. We respond quickly to all inquiries!
      </p>
      <form className="bg-white border-t-4 border-[#a31515] rounded-lg shadow p-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded px-3 py-2 text-black placeholder:text-gray-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded px-3 py-2 text-black placeholder:text-gray-500"
          required
        />
        <textarea
          placeholder="Your Message"
          className="border rounded px-3 py-2 text-black placeholder:text-gray-500"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-[#a31515] text-white rounded px-4 py-2 font-semibold hover:bg-red-800 transition-colors"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-gray-700">
        <p><span className="font-semibold">Email:</span> ms681729@gmail.com</p>
        <p><span className="font-semibold">Phone:</span> 7988834817</p>
        <p><span className="font-semibold">Address:</span> 123 Glass St, Suite 100, Cityville</p>
      </div>
    </div>
  );
}
