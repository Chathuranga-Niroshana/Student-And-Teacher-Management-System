import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

function UpdateTeacher() {
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
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/teachers/${id}`)
      .then((res) => {
        setClases(res.data.clases);
        setEmail(res.data.email);
        setMobile(res.data.mobile);
        setName(res.data.name);
        setNic(res.data.nic);
        setSex(res.data.sex);
        setSubject(res.data.subject);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occured!", { variant: "error" });
        console.log(error);
      });
  }, []);

  const updateHandle = () => {
    const data = {
      name,
      email,
      mobile,
      subject,
      clases,
      nic,
      sex,
    };
    axios
      .put(`http://localhost:8080/teachers/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Teacher Updated!", { variant: "success" });
        navigate("/teachers");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred. Check the console log");
        console.log(error);
      });
  };

  return (
    <>
      <h1>Update Teacher</h1>
      {loading ? <Spinner /> : ""}
      <div className="updateContainer">
        <div className="labels">
          <label>Name</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="labels">
          <label>Email</label>
        </div>
        <div className="inputs">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="labels">
          <label>Class</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            value={clases}
            onChange={(e) => setClases(e.target.value)}
          />
        </div>
        <div className="labels">
          <label>Mobile No</label>
        </div>
        <div className="inputs">
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="labels">
          <label>NIC</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
        </div>
        <div className="labels">
          <label>Subjects</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="inputs">
          <input
            className="sexInput"
            type="radio"
            name="sex"
            id="male"
            checked={sex === "Male"}
            onChange={() => setSex("Male")}
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            className="sexInput"
            type="radio"
            name="sex"
            id="female"
            checked={sex === "Female"}
            onChange={() => setSex("Female")}
          />
          <label htmlFor="female">Female</label>
          <br />
        </div>
        <div className="buttonContainer">
          <button onClick={updateHandle}>Update</button>
          <button onClick={() => navigate("/teachers")}> No</button>
        </div>
      </div>
    </>
  );
}

export default UpdateTeacher;
