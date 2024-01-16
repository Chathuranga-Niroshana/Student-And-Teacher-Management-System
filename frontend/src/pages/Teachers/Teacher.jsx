import React, { useState } from "react";
import Spinner from "../../componnents/Spinner/Spinner";
import TeacherTable from "../../componnents/Tables/TeacherTable";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/teachers")
      .then((res) => {
        setTeachers(res.data);
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
        <h1>Teachers</h1>
        <Link to="/teachers/create">
          <h1 className="CreateLink">➕</h1>
        </Link>
      </div>
      {loading ? <Spinner /> : <TeacherTable teachers={teachers} />}
    </>
  );
}

export default Teacher;
