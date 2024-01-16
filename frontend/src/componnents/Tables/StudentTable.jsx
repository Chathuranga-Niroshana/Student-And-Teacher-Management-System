import { Link } from "react-router-dom";
import "./Table.css";

function StudentTable({ students }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Class</th>
          <th>Email</th>
          <th>Mobile No</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student._id}>
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.clases}</td>
            <td>{student.email}</td>
            <td>{student.mobile}</td>
            <td>
              <div className="operationContainer">
                <Link to={`/students/show/${student._id}`}>
                  <>👨‍🎓</>
                </Link>
                <Link to={`/students/update/${student._id}`}>
                  <>💱</>
                </Link>
                <Link to={`/students/delete/${student._id}`}>
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
export default StudentTable;
