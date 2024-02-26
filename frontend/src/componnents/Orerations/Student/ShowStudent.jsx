import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

function ShowStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [clases, setClases] = useState("");
  const [mobile, setMobile] = useState("");
  const [DoB, setDoB] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/students/${id}`)
      .then((res) => {
        setLoading(false);
        setName(res.data.name);
        setClases(res.data.clases);
        setDoB(res.data.DoB);
        setEmail(res.data.email);
        setMobile(res.data.mobile);
        setSex(res.data.sex);
      })
      .catch((Error) => {
        setLoading(false);
        console.log(Error);
        enqueueSnackbar("An error has occured!", { variant: "error" });
      });
  }, []);

  return (
    <>
      <h1>Student Info</h1>
      {loading ? <Spinner /> : ""}
      <div className="showData">
        <div className="titleContext">
          <h2>Name</h2>
          <div>
            <h3 className="dataContext">{name}</h3>
          </div>
        </div>

        <div className="titleContext">
          <h2>Email</h2>
          <div className="dataContext">
            <h3>{email}</h3>
          </div>
        </div>

        <div className="titleContext">
          <h2>Mobile No</h2>
          <div className="dataContext">
            <h3>{mobile}</h3>
          </div>
        </div>

        <div className="titleContext">
          <h2>Date of Birth</h2>
          <div className="dataContext">
            <h3>{DoB}</h3>
          </div>
        </div>

        <div className="titleContext">
          <h2>Class</h2>
          <div className="dataContext">
            <h3>{clases}</h3>
          </div>
        </div>

        <div className="titleContext">
          <h2>Sex</h2>
          <div className="dataContext">
            <h3>{sex}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowStudent;
