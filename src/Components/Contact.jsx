import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 bg-pink-50" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-pink-700 mb-12 text-center">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-600 mb-6">
              We’d love to hear from you! Whether you have questions, feedback,
              or just want to say hello.
            </p>
            <div className="space-y-5">
              <p className="text-gray-700 flex items-center gap-3">
                <FaEnvelope className="text-pink-600 text-xl" />
                <span>
                  <span className="font-semibold">Email:</span> malicmoiz655@gmail.com
                </span>
              </p>
              <p className="text-gray-700 flex items-center gap-3">
                <FaPhoneAlt className="text-pink-600 text-xl" />
                <span>
                  <span className="font-semibold">Phone:</span> +923185846471
                </span>
              </p>
              <p className="text-gray-700 flex items-center gap-3">
                <FaMapMarkerAlt className="text-pink-600 text-xl" />
                <span>
                  <span className="font-semibold">Address:</span>Islamabad, Pakistan.
                </span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded"
              rows="4"
            ></textarea>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
