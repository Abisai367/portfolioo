
import { useState } from "react";
import Navbar from "./navbar.jsx";
import { motion } from "motion/react";
import { FaPaperPlane } from "react-icons/fa";

export default function HireMe() {
  const initialFormData = {
    username: "",
    number: "",
    email: "",
    category: "",
    toReview: "",
    otherSpecify: "",
    person: "",
    brief: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({
    text: "",
    isError: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.username.trim() ||
      !formData.number.trim() ||
      !formData.person
    ) {
      setStatus({
        text: "Check that you've filled all the required fields.",
        isError: true,
      });
      return;
    }

    const payload = {
      username: formData.username.trim(),
      useremail: formData.email.trim(),
      userphone: formData.number.trim(),
      userType: formData.person,
      userCategory: formData.category,
      userReview: formData.toReview,
      userOtherSpecify: formData.otherSpecify.trim(),
      userBrief: formData.brief.trim(),
    };

    setIsLoading(true);
    setStatus({
      text: "Sending...",
      isError: false,
    });

    try {
      const baseUrl = import.meta.env.VITE_API_URL || '';

      const response = await fetch(`${baseUrl}/hireme`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Server error");
      }

      setStatus({
        text: "Received Your Hire Request I will Reach you!",
        isError: false,
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Hire request error:", error);

      setStatus({
        text:
          error.message === "Failed to fetch"
            ? "Unable to connect to the server. Please try again."
            : error.message || "Hire Request could not be sent.",
        isError: true,
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <motion.div
      className="bg-gray-900 text-white font-sans antialiased min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Navbar />

      <section className="flex-1 max-w-2xl w-full mx-auto px-6 pt-12 pb-24 flex flex-col justify-center">

        <motion.div
          className="text-center md:text-left mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="inline-flex items-center px-3 py-1 text-lg font-medium text-green-400 bg-green-950/50 border border-green-800 rounded-full mb-4">
            Let's Collaborate
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-5xl">
            Send Me a Hire Request
          </h1>

          <p className="mt-3 text-lg text-gray-400">
            Submit your project details, and I will reach out as soon as
            possible.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-zinc-950/50 border border-zinc-800 p-8 rounded-2xl shadow-xl flex flex-col space-y-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >

          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-lg font-semibold text-gray-300 mb-2"
            >
              Your name <span className="text-red-500">*</span>
            </label>

            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Dickson Abisai"
              required
              className="w-full px-4 h-12 bg-zinc-900 border border-zinc-800 rounded-xl text-white outline-none focus:border-green-600 transition text-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="flex flex-col">
              <label
                htmlFor="number"
                className="text-lg font-semibold text-gray-300 mb-2"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                id="number"
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="+254..."
                required
                className="w-full px-4 h-12 bg-zinc-900 border border-zinc-800 rounded-xl text-white outline-none focus:border-green-600 transition text-lg"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-lg font-semibold text-gray-300 mb-2"
              >
                Email Address <span className="text-gray-500">(Optional)</span>
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full px-4 h-12 bg-zinc-900 border border-zinc-800 rounded-xl text-white outline-none focus:border-green-600 transition text-lg"
              />
            </div>

          </div>

          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="text-lg font-semibold text-gray-300 mb-2"
            >
              Category Of Work / Position
            </label>

            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 h-12 bg-zinc-900 border border-zinc-800 rounded-xl text-white outline-none focus:border-green-600 transition text-lg appearance-none cursor-pointer"
            >
              <option value="">Select One</option>
              <option value="fullstack">
                Fullstack Website Development
              </option>
              <option value="frontend">
                Frontend Website Development
              </option>
              <option value="backend">
                Backend Website Development
              </option>
              <option value="review">
                Review My Code / Help on a Specific Thing
              </option>
            </select>
          </div>

          {formData.category === "review" && (
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <label
                htmlFor="toReview"
                className="text-lg font-semibold text-gray-300 mb-2"
              >
                Choose What to Review / Language
              </label>

              <select
                id="toReview"
                name="toReview"
                value={formData.toReview}
                onChange={handleChange}
                className="w-full px-4 h-12 bg-zinc-900 border border-zinc-800 rounded-xl text-white outline-none focus:border-green-600 transition text-lg cursor-pointer"
              >
                <option value="">Select One</option>
                <option value="php">PHP</option>
                <option value="python">Python</option>
                <option value="javascript">Javascript</option>
                <option value="react">React.js</option>
                <option value="mysql">MySQL</option>
                <option value="payment">
                  Help Integrate Payment in My Code
                </option>
                <option value="other">Other</option>
              </select>
            </motion.div>
          )}

          {formData.category === "review" &&
            formData.toReview === "other" && (
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <label
                  htmlFor="otherSpecify"
                  className="text-lg font-semibold text-gray-300 mb-2"
                >
                  Specify Language / Tool
                </label>

                <input
                  id="otherSpecify"
                  type="text"
                  name="otherSpecify"
                  value={formData.otherSpecify}
                  onChange={handleChange}
                  placeholder="e.g., Node.js, Next.js"
                  className="w-full px-4 h-12 bg-zinc-900 border border-zinc-800 rounded-xl text-white outline-none focus:border-green-600 transition text-lg"
                />
              </motion.div>
            )}

          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-300 mb-3">
              Are you a Company or Individual?{" "}
              <span className="text-red-500">*</span>
            </span>

            <div className="flex gap-6">

              <label className="flex items-center text-lg font-normal text-gray-300 cursor-pointer select-none">
                <input
                  type="radio"
                  name="person"
                  value="individual"
                  checked={formData.person === "individual"}
                  onChange={handleChange}
                  className="w-4 h-4 mr-2 accent-green-600 cursor-pointer"
                />
                Individual
              </label>

              <label className="flex items-center text-lg font-normal text-gray-300 cursor-pointer select-none">
                <input
                  type="radio"
                  name="person"
                  value="company"
                  checked={formData.person === "company"}
                  onChange={handleChange}
                  className="w-4 h-4 mr-2 accent-green-600 cursor-pointer"
                />
                Company
              </label>

            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="brief"
              className="text-lg font-semibold text-gray-300 mb-2"
            >
              Give A Brief{" "}
              <span className="text-gray-500">(Optional)</span>
            </label>

            <textarea
              id="brief"
              name="brief"
              value={formData.brief}
              onChange={handleChange}
              placeholder="Tell me briefly about your project or what you need help with..."
              rows={5}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white outline-none focus:border-green-600 transition text-lg resize-none"
            />
          </div>

          {status.text && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center text-lg font-medium transition-colors duration-200 ${
                status.isError ? "text-red-500" : "text-green-500"
              }`}
            >
              {status.text}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition duration-300 shadow-lg shadow-green-950/30"
          >
            <FaPaperPlane />

            {isLoading ? "Sending..." : "Send Hire Request"}
          </button>

        </motion.form>
      </section>
    </motion.div>
  );
}
