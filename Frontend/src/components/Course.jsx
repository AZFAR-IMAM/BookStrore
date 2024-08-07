import NavBar from "./NavBar";
import Courses from "./Courses";
import Footer from "./Footer";

function Course() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <Courses />
      </div>
      <Footer />
    </>
  );
}

export default Course;
