import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          {/* I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!  */}

          I&apos;m actively seeking new opportunities and welcome any inquiries or 
          messages. I prioritize prompt responses and will do
           my utmost to get back to you swiftly. 
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/siremms300">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/idoga-emmanuel">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div> 
      </div>
      <div>
        <p className="text-white text-sm mb-2">
          Reach me via email at{" "} 
          <a href="mailto:siremms300@gmail.com" className="text-primary-500 underline">
            siremms300@gmail.com
          </a>
        </p>

        <p className="text-white text-sm mb-2">
          Or give me a call at{" "}
          <a href="tel:+2349128935386" className="text-primary-500 underline">
          +2349128935386
          </a>
        </p> 

        <p className="text-white text-sm mb-2">
          For WhatsApp, you can message me at{" "}
          <a href="https://wa.me/2349128935386" className="text-primary-500 underline">
            WhatsApp
          </a>
        </p>

      </div> 
    </section>
  );
};

export default EmailSection;








// import React, { useState } from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
// import Link from "next/link";
// import Image from "next/image";

// const EmailSection = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       email: e.target.email.value,
//       subject: e.target.subject.value,
//       message: e.target.message.value,
//     };
//     const JSONdata = JSON.stringify(data);
//     const endpoint = "/api/send";

//     // Form the request for sending data to the server.
//     const options = {
//       // The method is POST because we are sending data.
//       method: "POST",
//       // Tell the server we're sending JSON.
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // Body of the request is the JSON data we created above.
//       body: JSONdata,
//     };

//     try {
//       const response = await fetch(endpoint, options);
//       if (response.ok) {
//         console.log("Message sent.");
//         setEmailSubmitted(true);
//       } else {
//         console.error("Failed to send email.");
//         setEmailSubmitted(false);
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setEmailSubmitted(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-10">
//         <h5 className="text-xl font-bold text-white my-2">
//           Let&apos;s Connect
//         </h5>
//         <p className="text-[#ADB7BE] mb-4 max-w-md">
//           {" "}
//           I&apos;m currently looking for new opportunities, my inbox is always
//           open. Whether you have a question or just want to say hi, I&apos;ll
//           try my best to get back to you!
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href="github.com">
//             <Image src={GithubIcon} alt="Github Icon" />
//           </Link>
//           <Link href="linkedin.com">
//             <Image src={LinkedinIcon} alt="Linkedin Icon" />
//           </Link>
//         </div> 
//       </div>
//       <div>
//         {emailSubmitted ? (
//           <p className="text-green-500 text-sm mt-2">
//             Email sent successfully!
//           </p>
//         ) : (
//           <form className="flex flex-col" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="text-white block mb-2 text-sm font-medium"
//               >
//                 Your email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="jacob@google.com"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="subject"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 id="subject"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Just saying hi"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Let's talk about..."
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EmailSection;
