import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";
import Spinner from "../../Spinner/Spinner";

function DeleteStudent() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/students/${id}`)
      .then((res) => {
        setName(res.data.name);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        enqueueSnackbar("An error occured!", { variant: "error" });
      });
  }, []);

  const deleteHandle = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8000/students/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Student Deleted!", { variant: "success" });
        navigate("/students");
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("An error occured!", { variant: "error" });
        setLoading(false);
      });
  };

  return (
    <>
      <div>
        <h1>Delete Student</h1>
      </div>
      <div className="deleteContener">
        {loading ? <Spinner /> : ""}
        <div>
          <h2>Do you want to delete {name} ? </h2>
        </div>
        <div>
          <button onClick={deleteHandle}>Confirm</button>
          <button onClick={() => navigate("/students")}> No</button>
        </div>
      </div>
    </>
  );
}

export default DeleteStudent;
