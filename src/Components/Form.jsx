import React, { useState } from "react";
import "./form.css";

import emailjs from "@emailjs/browser";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import pencil from "./../assets/pencil.svg";
import form from "./../assets/form-img.svg";

import { supabase } from "../lib/supabase";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
    phoneNumber: "",
    message: "",
    helpNeeded: [],
    brandDescription: "",
    brandLink: "",
    investment: "",
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        helpNeeded: [...new Set([...formData.helpNeeded, value])],
      });
    } else {
      setFormData({
        ...formData,
        helpNeeded: formData.helpNeeded.filter((item) => item !== value),
      });
    }
    setErrors({
      ...errors,
      helpNeeded: "",
    });
  };



  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      formErrors.email = "Enter a valid email";
    }
    const phone = formData.phoneNumber.replace(/\D/g, "");
    if (phone.length !== 10) {
      formErrors.phoneNumber = "Enter a valid phone number";
    }

    if (formData.helpNeeded.length === 0)
      formErrors.helpNeeded = "Please select a help option";
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }
    if (!formData.investment) formErrors.investment = "Budget is required";

  

  return formErrors;
  }



const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validateForm();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setLoading(true);

  try{

  const { error } = await supabase
    .from("contact_enquiries")
    .insert([
      {
        name: formData.name,
        email: formData.email,
        phone_number: formData.phoneNumber,
        help_needed: formData.helpNeeded,
        investment: formData.investment,
        brand_name: formData.brandName,
        brand_description: formData.brandDescription,
        brand_link: formData.brandLink,
        message: formData.message,
      },
    ]);

  if (error) {
    setLoading(false);
    setFormStatus("error");
    console.error("Supabase Error:", error);
    return;
  }
  
  await emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    e.target,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          brandName: "",
          phoneNumber: "",
          message: "",
          helpNeeded: [],
          brandDescription: "",
          brandLink: "",
          investment: "",
        });


        e.target.reset();

        setTimeout(() => {
          setFormStatus(null);
        }, 3000);
      
      }
      catch
      (error){
    console.error("Submission Error:", error);

    setFormStatus("error");

    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  } finally {
    setLoading(false);
  }
};








return (
  <div
    className="flex flex-col  items-center py-10"
    style={{
      background: "#e8fec7",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "top",
    }}
  >
    <div className=" max-w-full  relative px-10 flex md:flex-row justify-between gap-5 sm:gap-10 items-center  pt-20">
      <motion.h1
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-[10vw] font-bold  md:my-10  py-5"
      >
        Let's Collab
      </motion.h1>
      <motion.img
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, delay: 0.5 }}
        src={form}
        alt="Blorence design branding | brand building"
        className="size-28 md:size-80"
      />{" "}
    </div>
    <motion.form
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1, delay: 0.5 }}
      onSubmit={handleSubmit}
      className="contact-form md:p-20 p-5 md:z-10 max-w-md mx-5 md:max-w-6xl  md:mx-auto  bg-white rounded-3xl shadow-md space-y-8 pb-20 mb-10 opacity-100"
    >
      <h2 className="text-2xl  md:text-3xl relative font-semibold  text-center mb-10 form-title ">
        <span className="z-10">Fill out this! </span>{" "}
        <img
          src={pencil}
          alt=" contact Form  "
          width={"80px"}
          className="form-pencil absolute left-1/2 bottom-0 z-0 mt-10   "
        />
      </h2>
      <div>
        <label
          htmlFor="name"
          className="block text-sm md:text-lg font-medium text-gray-700"
        >
          Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="My name is"
          className={`mt-1 block w-full px-3 py-2  md:w-3/4 md:text-2xl border-b-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.name ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium md:text-lg text-gray-700"
        >
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="My Email is"
          className={`mt-1 block w-full px-3 py-2 md:w-3/4 md:text-2xl border-b-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.email ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>


      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium md:text-lg text-gray-700"
        >
          Phone Number*
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          autoComplete="tel"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="My Phone Number is"
          className={`mt-1 block w-full px-3 py-2 md:w-3/4 md:text-2xl border-b-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 md:text-lg mb-7">
          I'm looking for help in ...
        </label>
        <div className="flex flex-wrap gap-4 md:gap-x-5 md:gap-y-10 ">
          {[
            "Website",
            "Logo",
            "Branding",
            "Design consultation",
            "Motion Graphics",
            "Social media",
            "Packaging",
            "other",
          ].map((option) => (
            <label key={option} className="cursor-pointer" >
              <input
                type="checkbox"
                name="helpNeeded"
                value={option}
                checked={formData.helpNeeded.includes(option)}
                onChange={handleCheckboxChange}
                aria-label={option}
                className="hidden peer"
              />
              <span className="px-3 py-1 md:px-5 md:py-3  bg-transparent border border-black md:text-lg hover:border-none hover:bg-blue-400 md:w-3/4 rounded-full peer-checked:bg-blue-500 peer-checked:border-none">
                {option}
              </span>
            </label>
          ))}
        </div>
        {errors.helpNeeded && (
          <p className="text-red-500 text-sm mt-1">{errors.helpNeeded}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium md:text-lg text-gray-700 mb-7">
          I'm willing to spend on this project (in INR)
        </label>
        <div className="flex flex-wrap  gap-4 md:gap-x-5 md:gap-y-10">
          {["INR 10K - 50K", "50K - 1Lac", "1Lac - 2Lac", "+2Lac"].map(
            (option) => (
              <label key={option} className="cursor-pointer">
                <input
                  type="radio"
                  name="investment"
                  value={option}
                  checked={formData.investment === option}
                  onChange={handleChange}
                  className="hidden peer"
                />
                <span className="px-3 py-1 md:px-5 md:py-3  bg-transparent border border-black hover:bg-blue-400 hover:border-none md:text-lg md:w-3/4 rounded-full peer-checked:bg-blue-500 peer-checked:border-none">
                  {option}
                </span>
              </label>
            ),
          )}
        </div>
        {errors.investment && (
          <p className="text-red-500 text-sm mt-1">{errors.investment}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="brandName"
          className="block  text-sm md:text-lg font-medium text-gray-700"
        >
          Brand Name
        </label>
        <input
          type="text"
          id="brandName"
          name="brandName"
          value={formData.brandName}
          onChange={handleChange}
          placeholder="Your Brand Name"
          className={`mt-1 block w-full px-3 py-2 md:w-3/4 md:text-2xl border-b-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.brandName ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.brandName && (
          <p className="text-red-500 text-sm mt-1">{errors.brandName}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="brandDescription"
          className="block text-sm font-medium md:text-lg text-gray-700"
        >
          Brand Description
        </label>
        <textarea
          id="brandDescription"
          name="brandDescription"
          value={formData.brandDescription}
          onChange={handleChange}
          placeholder="Tell us about your brand"
          className={`mt-1 block w-full px-3 py-2 md:w-3/4 md:text-2xl border-b-2  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.brandDescription ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.brandDescription && (
          <p className="text-red-500 text-sm mt-1">
            {errors.brandDescription}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="brandLink"
          className="block text-sm font-medium md:text-lg text-gray-700"
        >
          Brand Link
        </label>
        <input
          type="text"
          id="brandLink"
          name="brandLink"
          value={formData.brandLink}
          onChange={handleChange}
          placeholder="Share Links to project files you’d like to share, if any"
          className={`mt-1 block w-full px-3 py-2 md:w-3/4 md:text-2xl border-b-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.brandLink ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.brandLink && (
          <p className="text-red-500 text-sm mt-1">{errors.brandLink}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium md:text-lg text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more"
          className={`mt-1 block w-full px-3 py-2 md:w-3/4 md:text-2xl border-b-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.message ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit" disabled={loading}
        className="w-full md:w-auto  md:py-5 md:px-20  inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm md:text-3xl text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
      {formStatus === "success" && (
        <p className="text-green-600 text-sm mt-1 py-1 ">
          ✅ Thank you!

          We've received your enquiry.

          Our team will contact you within 24 hours.
        </p>
      )}
      {formStatus === "error" && (
        <p className="text-red-600 text-sm mt-1  py-1  ">
          An error occurred. Please try again.
        </p>
      )}
    </motion.form>
  </div>
);

};
export default ContactForm;
