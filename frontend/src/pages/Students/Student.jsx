import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../../componnents/Spinner/Spinner.jsx";
import StudentTable from "../../componnents/Tables/StudentTable.jsx";

function Student() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/students")
      .then((res) => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="headDiv">
        <h1>Students</h1>
        <Link to="/students/create">
          <h1 className="CreateLink">➕</h1>
        </Link>
      </div>
      {loading ? <Spinner /> : <StudentTable students={students} />}
    </>
  );
}

export default Student;
