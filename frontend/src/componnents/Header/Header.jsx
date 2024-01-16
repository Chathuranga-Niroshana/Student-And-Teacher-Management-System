import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <h1>Student And Teacher Management System</h1>
      </div>
      <div className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/teachers">Teachers</a>
          </li>
          <li>
            <a href="/students">Students</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
