import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar";
import Openings from "./pages/Openings";
import Coordinators from "./pages/Coordinators";
import Testimonials from "./pages/Testimonials";
import Roles from "./pages/Roles";
import SocietyForm from "./pages/SocietyForm";
import Allsocities from "./pages/Allsociety/Allsocities";
import AboutUs from "./components/Page-Components/AboutUs";
import Vision from "./components/Page-Components/Vision";
import News from "./components/Page-Components/News";
import AllNews from "./components/Page-Components/AllNews";
import SocietyQueryForm from "./components/Page-Components/SocietyQueryForm";
import Evaluation from "./pages/Evaluation";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Common-Components/Footer";
import FeedbackButton from "./components/Common-Components/FeedbackButton";
import FeedbackForm from "./components/Common-Components/FeedbackForm";
import ScrollToTop from "./components/ScrollToTop";
import Society from "./pages/Society";
import SocietyGallery from "./pages/SocietyGallery";
import SocietMembers from "./components/Page-Components/SocietMembers";
import AllGallery from "./pages/AllGallery";
import Secondary_navbar from "./components/Common-Components/Secondary_navbar";
import StudentLogin from "./pages/StudentLogin";
import Events from "./components/Page-Components/Events/Events";
import Societyjoiningform from "./pages/Societyjoiningform";
import Societyjoiningrequst from "./pages/Societyjoiningrequst";
import CreateEventForm from "./components/Page-Components/CreateEventForm";
import Admin_News from "./Admin_Panel/Page/News";
import Admin_Members from "./Admin_Panel/Page/Members";
import Admin_Queries from "./Admin_Panel/Page/Queries";
import SocietyMembers from "./pages/Society_Members";
import ViewPhoto from "./pages/ViewPhoto";
import Become_Member_Form from "./pages/Become_Member_Form";
import Activity_Feed from "./Admin_Panel/Page/Activity_Feed";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";
import ResetPasswordPage from "./pages/ResetPassword";
import OTP from "./pages/OTP";
import ChangePassword from "./pages/ChangePassword";
import Admin_Coordinators from "./Admin_Panel/Page/Coordinators";
import Admin_Setting from "./Admin_Panel/Page_Components/Settings/Settings";

const App = () => {
  const location = useLocation();
  console.log(location);
  const Locations = location.pathname.split("/");
  console.log(Locations);

  if (Locations[1].toLowerCase() === "admin") {
    return (
      <Routes>
        <Route path="/admin/news" element={<Admin_News />} />
        <Route path="/admin/members" element={<Admin_Members />} />
        <Route path="/admin/queries" element={<Admin_Queries />} />
        <Route path="/admin/coordinators" element={<Admin_Coordinators />} />
        <Route path="/admin/setting" element={<Admin_Setting />} />

        <Route path="/admin" element={<Activity_Feed />} />
      </Routes>
    );
  }

  const showSecondaryNavbar = Locations[1] === "society";

  return (
    <>
      {Locations[1].toLowerCase() !== "login" &&
        Locations[1].toLowerCase() !== "signup" &&
        Locations[1].toLowerCase() !== "reset-password" &&
        Locations[1].toLowerCase() !== "verify-email" &&
        Locations[1].toLowerCase() !== "changepassword" && <Navbar />}
      <div className="font-mono transition-colors duration-300">
        {showSecondaryNavbar && <Secondary_navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BecomeMember" element={<Become_Member_Form />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/openings/:id" element={<Openings />} /> */}
          <Route path="/roles" element={<Roles />} />
          <Route path="/coordinators" element={<Coordinators />} />
          {/* <Route path="/testimonials/:id" element={<Testimonials />} /> */}
          <Route path="/create" element={<SocietyForm />} />
          <Route path="/members" element={<SocietMembers />} />
          <Route path="/societies" element={<Allsocities />} />
          <Route path="/vision" element={<Vision />} />
          {/* <Route path="/news/:id" element={<News />} /> */}
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/query" element={<SocietyQueryForm />} />
          {/* <Route path="/evaluation/:id" element={<Evaluation />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/allgallery" element={<AllGallery />} />
          {/* <Route path="/society/:id" element={<Society />}  */}
          <Route path="/societygallery" element={<SocietyGallery />} />
          <Route path="/slogin" element={<StudentLogin />} />
          <Route path="/events" element={<Events />} />
          <Route path="/societyjoinform" element={<Societyjoiningform />} />
          <Route path="/members/:id" element={<Evaluation />} />
          {/* <Route path="/Societymembers/:id" element={<SocietyMembers />} /> */}
          <Route path="/gallery/:Societyid/:ImageId" element={<ViewPhoto />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route
            path="/societyjoinrequest"
            element={<Societyjoiningrequst />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          <Route path="/feedbackform" element={<FeedbackForm />} />
          <Route path="/verify-email" element={<OTP />} />
          <Route
            path="/create-event/:societyid/:eventid"
            element={<CreateEventForm />}
          />
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/society/:id" element={<Society />}>
            <Route path="Societymembers" element={<SocietyMembers />} />
            <Route path="societygallery" element={<SocietyGallery />} />
            <Route path="events" element={<Events />} />
            <Route path="news" element={<News />} />
            <Route path="openings" element={<Openings />} />
            <Route path="coordinators" element={<Coordinators />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="news" element={<News />} />
            <Route path="evaluation" element={<Evaluation />} />
            <Route path="members" element={<SocietMembers />} />
          </Route>
        </Routes>
      </div>
      {Locations[1].toLowerCase() !== "login" &&
        Locations[1].toLowerCase() !== "signup" &&
        Locations[1].toLowerCase() !== "verify-email" &&
        Locations[1].toLowerCase() !== "reset-password" &&
        Locations[1].toLowerCase() !== "changepassword" &&
        Locations[1].toLowerCase() !== "verify-email" && <FeedbackButton /> && (
          <Footer />
        )}

      <ScrollToTop />
    </>
  );
};

export default App;
