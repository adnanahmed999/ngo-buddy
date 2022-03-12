import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Pages
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import Chatbot from "./components/Chatbot";
import Map from "./components/Map";
import EditProfile from "./components/EditProfile";
import alanBtn from "@alan-ai/alan-sdk-web";
// import CoursePage from "./components/CoursePage";
// import Assignments from "./components/Assignments";
// import AdminLogin from "./components/AdminLogin";
// import AdminDashboard from "./components/AdminDashboard";
// import MyCoursesUser from "./components/MyCoursesUser";
// import ContactForm from "./components/ContactUs";
// import MyCoursesInstr from "./components/MyCoursesInstr";
// import CreateCourse from "./components/CreateCourse";
// import CreateChapter from "./components/CreateChapter";
// import CareerForm from "./components/CareerForm";
// import ProfilePage from "./components/ProfilePage";

function App() {
  const navigate = useNavigate();
  const alanKey =
    "cfdac5b36d0a78de9cd6709b0a7e592e2e956eca572e1d8b807a3e2338fdd0dc/stage";
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "login") {
          navigate("/signin");
        } else if (command === "signup") {
          navigate("/signup");
        } else if (command === "home") {
          navigate("/");
        }
      },
    });
  }, []);
  return (
    // <BrowserRouter>
    <>
      <Navbar component={Navbar} />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/signin" element={<Signin />} exact></Route>
        <Route path="/signup" element={<Signup />} exact></Route>
        <Route path="/myProfile" element={<ProfilePage />} exact></Route>
        <Route path="/editProfile" element={<EditProfile />} exact></Route>
        <Route path="/map" element={<Map />} exact></Route>
      </Routes>
      {/* <Chatbot /> */}
      {/* <Footer /> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
