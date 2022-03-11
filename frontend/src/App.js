import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import ProfilePage from "./components/ProfilePage"
import Chatbot from "./components/Chatbot"
import EditProfile from "./components/EditProfile";
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
  return (
    <BrowserRouter>
      <Navbar component={Navbar} />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/signin" element={<Signin />} exact></Route>
        <Route path="/signup" element={<Signup />} exact></Route>
        <Route path="/myProfile" element={<ProfilePage />} exact></Route>
        <Route path="/editProfile" element={<EditProfile />} exact></Route>
        {/* <Route path="/course/:id" component={CoursePage} exact></Route>
      <Route path="/assignments/:id" component={Assignments} exact></Route>
      <Route path="/admin/login" component={AdminLogin} exact></Route>
      <Route path="/admin/access" component={AdminDashboard} exact></Route>
      <Route path="/mycourses/:id" component={MyCoursesUser} exact></Route>
      <Route path="/contactForm" component={ContactForm} exact></Route>
      <Route path="/careerForm" component={CareerForm} exact></Route>
      <Route path="/myProfile" component={ProfilePage} exact></Route>
      <Route
        path="/instructorcourses/:id"
        component={MyCoursesInstr}
        exact
      ></Route>
      <Route path="/createCourse" component={CreateCourse} exact></Route>
      <Route path="/createChapter/:id" component={CreateChapter} exact></Route> */}
      </Routes>
      <Chatbot />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;