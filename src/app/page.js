"use client";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";


import Footer from "@/components/Footer/Footer";

import { useState } from "react";
import Popup from "@/components/Popup/Popup";

export default function Home() {
  const [activeTab, setActiveTab] = useState("UG");
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index); // Toggle open state
  };

  const faqData = [
    {
      question: "Why should I join Gyanarthi  College?",
      answer: "At Gyanarthi  College, you’ll experience a specialized learning method that builds you for the real world. With guidance from industry experts through workshops and industrial trips, you’ll get more than just theoretical knowledge."
    },
    {
      question: "What makes Gyanarthi a better option for me?",
      answer: "Gyanarthi  College offers more than just textbook learning. We provide a way to success. Our students enjoy a balance of academic learning and real-world experience guided by experienced teachers. With over 150 companies, including names like Reliance, NEWS15, and IIM Kashipur, consistently impressed by the caliber of our students, Gyanarthi opens doors to a world of career opportunities, making it the ideal choice for anyone serious about their future."
    },
    {
      question: "What is the admission process for Gyanarthi  College?",
      answer: "The admission process for Gyanarthi  College is very simple. You just need to fill out the application form and follow the steps outlined on our website. Our admissions team is also available to assist you with any questions or concerns you may have throughout the process."
    },
    {
      question: "Will I get assistance in choosing my specialization?",
      answer: "Yes, we at Gyanarthi  College believe in supporting our students in every aspect of their academic learning. Starting from the admission, our faculty is always there to assist students if they get stuck at some point."
    },
    
  ];
  
  return (
    <>
      <head>
        <script
        id="clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "r8gqo9dp1g");
          `,
        }}
        ></script>
        <script
        src="https://www.googletagmanager.com/gtag/js?id=AW-956907995"
        strategy="afterInteractive"
      />
      <script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-956907995');
          `,
        }}
        ></script>
        <script id="google-ads-conversion" strategy="afterInteractive">
  {`
    gtag('event', 'conversion', {'send_to': 'AW-956907995/SkFMCM_ag-4CENuDpcgD'});
  `}
</script>
      </head>
     <Popup/>
      <Header />
      <Main />
    

     
       <div className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Frequently Asked Questions</h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <div
                onClick={() => toggleOpen(index)}
                className="cursor-pointer flex justify-between items-center py-4 text-lg font-semibold text-gray-800 "
              >
                <span>{item.question}</span>
                <span className={`transform transition-transform duration-300 ${open === index ? "rotate-45" : ""}`}>
                  {/* Adding the "+" icon here */}
                  <i className={`fas ${open === index ? "fa-minus" : "fa-plus"}`}></i>
                </span>
              </div>

              {open === index && (
                <div className="text-gray-600 text-left text-lg pb-4">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
      <Footer />  


    </>
  );
}
