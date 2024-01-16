import { Routes, Route } from "react-router-dom";
import Header from "./componnents/Header/Header";
import Home from "./pages/Home/Home";
import Teacher from "./pages/Teachers/Teacher";
import Student from "./pages/Students/Student";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CreateStudent from "./componnents/Orerations/Student/CreateStudent";
import DeleteStudent from "./componnents/Orerations/Student/DeleteStudent";
import UpdateStudent from "./componnents/Orerations/Student/UpdateStudent";
import ShowStudent from "./componnents/Orerations/Student/ShowStudent";
import CreateTeacher from "./componnents/Orerations/Teacher/CreateTeacher";
import DeleteTeacher from "./componnents/Orerations/Teacher/DeleteTeacher";
import UpdateTeacher from "./componnents/Orerations/Teacher/UpdateTeacher";
import ShowTeacher from "./componnents/Orerations/Teacher/ShowTeacher";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/students" element={<Student />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/students/create" element={<CreateStudent />} />
        <Route path="/students/delete/:id" element={<DeleteStudent />} />
        <Route path="/students/update/:id" element={<UpdateStudent />} />
        <Route path="/students/show/:id" element={<ShowStudent />} />

        <Route path="/teachers/create" element={<CreateTeacher />} />
        <Route path="/teachers/delete/:id" element={<DeleteTeacher />} />
        <Route path="/teachers/update/:id" element={<UpdateTeacher />} />
        <Route path="/teachers/show/:id" element={<ShowTeacher />} />
      </Routes>
    </>
  );
}

export default App;
