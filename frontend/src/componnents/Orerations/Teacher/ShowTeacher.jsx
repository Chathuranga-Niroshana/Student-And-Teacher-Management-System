import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import Spinner from "../../Spinner/Spinner";

function ShowTeacher() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [clases, setClases] = useState("");
  const [nic, setNic] = useState("");
  const [sex, setSex] = useState("");
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/teachers/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setMobile(res.data.mobile);
        setSubject(res.data.subject);
        setClases(res.data.clases);
        setNic(res.data.nic);
        setSex(res.data.sex);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("An error has occured!", { variant: "error" });
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Teacher Info</h1>
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
          <h2>Subjects</h2>
          <div className="dataContext">
            <h3>{subject}</h3>
          </div>
        </div>

        <div className="titleContext">
          <h2>Class</h2>
          <div className="dataContext">
            <h3>{clases}</h3>
          </div>
        </div>

        <div className="titleContext">
          <h2>NIC</h2>
          <div className="dataContext">
            <h3>{nic}</h3>
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

export default ShowTeacher;
