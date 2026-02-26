import { Link } from "react-router-dom";

function Navbar() {
  const logout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>💼 Payroll System</div>

      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/add">Add Employee</Link>
        <Link style={styles.link} to="/fetch">Fetch Employee</Link>
        <Link style={styles.link} to="/salary">Manage Salary</Link>

        {/* 👇 Logout Button */}
        <button style={styles.logout} onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "linear-gradient(90deg, #4b6cb7, #182848)",
    color: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 12px",
    borderRadius: "5px"
  },
  logout: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Navbar;