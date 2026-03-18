import { useState } from "react";
import { db, auth } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ SAVE DATA TO FIRESTORE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = auth.currentUser;

      console.log("User:", user); // 🔍 debug

      if (!user) {
        alert("User not logged in ❌");
        return;
      }

      // ✅ Save directly in "Users" collection
      await addDoc(collection(db, "Users"), {
        name: form.name,
        phone: form.phone,
        address: form.address,
        userId: user.uid,
        createdAt: new Date(),
      });

      alert("Data Saved in Firestore 🎉");

      // ✅ Reset form
      setForm({
        name: "",
        phone: "",
        address: "",
      });

    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  // ✅ Logout
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">

        <div className="header">
          <h2>Dashboard</h2>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <label>Phone</label>
          </div>

          <div className="input-group">
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
            <label>Address</label>
          </div>

          <button type="submit" className="save-btn">
            Save Data
          </button>

        </form>

      </div>
    </div>
  );
}