import React from "react";
import { Link } from "react-router-dom";

function TeacherTable({ teachers }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Class</th>
          <th>Subject</th>
          <th>Email</th>
          <th>Moble</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map((teacher, index) => (
          <tr key={teacher._id}>
            <td>{index + 1}</td>
            <td> {teacher.name} </td>
            <td> {teacher.clases} </td>
            <td> {teacher.subject} </td>
            <td> {teacher.email} </td>
            <td> {teacher.mobile} </td>
            <td>
              <div className="operationContainer">
                <Link to={`/teachers/show/${teacher._id}`}>
                  <>👨‍🎓</>
                </Link>
                <Link to={`/teachers/update/${teacher._id}`}>
                  <>💱</>
                </Link>
                <Link to={`/teachers/delete/${teacher._id}`}>
                  <>⛔</>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TeacherTable;
