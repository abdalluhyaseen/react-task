import React, { useState } from "react";

function App() {
  // إدارة حالة الحقول
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // تحديث الحقول عند إدخال البيانات
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // معالجة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    console.log("Form Data Submitted: ", formData);
    alert("Form submitted successfully!"); // رسالة تاكيد
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>React Form </h1>
      <form onSubmit={handleSubmit}>
        {/* حقل الاسم /} */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* {/ حقل البريد الإلكتروني /} */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* {/ حقل كلمة المرور /} */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* {/ زر الإرسال */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
