"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-200 text-white min-h-screen p-8 container mx-auto">
      {/* قسم المعلومات */}
      <div className="bg-gray-100 text-gray-900 rounded-lg p-6 shadow-lg" data-aos="fade-down">
        <h2 className="text-3xl font-bold text-center mb-4">تواصل معنا</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-lg font-semibold">📍 العنوان</span>
            <p>123 شارع المتجر، المدينة، الدولة</p>
          </div>
          <div>
            <span className="block text-lg font-semibold">📞 الهاتف</span>
            <p>+123 456 789</p>
          </div>
          <div>
            <span className="block text-lg font-semibold">📧 البريد الإلكتروني</span>
            <p>contact@yourstore.com</p>
          </div>
          <div>
            <span className="block text-lg font-semibold">⏰ ساعات العمل</span>
            <p>الإثنين - الجمعة: 9 صباحًا - 6 مساءً</p>
          </div>
        </div>
      </div>

      {/* نموذج التواصل والخريطة */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* نموذج التواصل */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg" data-aos="fade-right">
          <h3 className="text-2xl font-bold mb-4">أرسل لنا رسالة</h3>
          <form className="flex flex-col gap-3">
            <input className="w-full p-4 mb-4 border rounded" type="text" placeholder="الاسم" />
            <input className="w-full p-4 mb-4 border rounded" type="email" placeholder="البريد الإلكتروني" />
            <input className="w-full p-4 mb-4 border rounded" type="text" placeholder="الموضوع" />
            <textarea className="w-full p-4 mb-4 border rounded" placeholder="اكتب رسالتك هنا"></textarea>
            <button className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary cursor-pointer duration-300">إرسال الرسالة</button>
          </form>
        </div>

        {/* خريطة الموقع */}
        <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.927177254146!2d-74.0059410845937!3d40.71277627933073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31643b21fb%3A0x5a7257336e6f0e9d!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1642093666173!5m2!1sen!2s"
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            title="خريطة الموقع"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
