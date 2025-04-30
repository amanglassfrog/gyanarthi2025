import { useEffect, useState } from "react";

const courses = [
  { id: 1, name: "BCom (3 years)" },
  { id: 2, name:   "BCom Banking and Finance (3 years)" },
  { id: 3, name: "BCom Financial Accounting (3 years)" },
    { id: 4, name: " BFA (4 years)" },
    { id: 4, name: " BFA (4 years)" }, { id: 5, name: "BA Animation and Design (3 years)" }, { id: 6, name: "BSc Fashion Designing (3 years)" }, { id: 7, name: "MA Animation and Design (2 years)" }, { id: 8, name: "MSc Fashion Designing (2 years)" }, { id: 9, name: "BJMC (3 years)" },
    { id: 10, name: "MJMC (2 years)" },
];

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // Show popup after page load
    setShowPopup(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Validation Function
  const validateForm = () => {
    const errors = {};

    // Name validation (only letters and spaces)
    if (!formData.name) errors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.name)) errors.name = "Name should only contain letters and spaces";

    // Phone validation (exactly 10 digits)
    if (!formData.phone) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) errors.phone = "Phone number must be 10 digits";

    // Email validation
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";

    // Course validation
    if (!formData.course) errors.course = "Course selection is required";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const errors = validateForm();
    setFormErrors(errors);

    // If there are validation errors, do not proceed with submission
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true); // Start the submission process

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {
        setFormSubmitted(true); // Mark the form as successfully submitted
        setShowPopup(false); // Close the popup after submission

        // Trigger PDF download after successful form submission
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = "/GyanarthiCareerGuidance.pdf"; // Provide the correct path to the PDF
          link.download = "GyanarthiCareerGuidance.pdf"; // Name of the PDF file
          link.click(); // Trigger the download
        }, 1000);
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false); // Stop the spinner after submission
    }
  };

  if (!showPopup) return null;

  return (
   <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 ">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg items-center flex flex-col md:flex-row p-6 relative">
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600"
        >
          &times;
        </button>

        {/* Left Side Text */}
        <div className="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-6">
         <img src="/img1.jpg" className="h-[10rem] md:h-full"/>
        </div>

        {/* Right Side Form */}
              <div className="md:w-1/2">
                   <h2 className="text-2xl font-semibold mb-4">
            Ready to take charge of your future?
          </h2>
          <p className="text-gray-700 text-xl">
            Download our FREE Career Guidance eBook and discover the path to
            your dream job today!
          </p>
          <h3 className="text-xl font-semibold mb-4 pt-5">
            Fill the form and get your eBook now
          </h3>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3 font-sans">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm">{formErrors.phone}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>

              {/* Course Selection */}
              <div>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value="">Select your course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
                {formErrors.course && (
                  <p className="text-red-500 text-sm">{formErrors.course}</p>
                )}
              </div>

              {/* Submit Button with Spinner */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-medium py-2 rounded"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="animate-spin border-4 border-t-4 border-gray-300 border-t-yellow-500 w-6 h-6 rounded-full mx-auto"></div>
                ) : (
                  "Submit & Download"
                )}
              </button>
            </form>
          ) : (
            <p className="text-green-500">Thank you! Your eBook is downloading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
