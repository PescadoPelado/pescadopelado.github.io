import { Link } from "react-router-dom";

export function NavigationBar() {
  window.onload = function () {
    document.addEventListener("click", function (event) {
      // if the clicked element isn't child of the navbar, you must close it if is open
      if (
        !event.target.closest("#navbarNav") &&
        document.getElementById("navbarNav").classList.contains("show")
      ) {
        document.getElementById("navButton").click();
      }
    });
  };

  return (
    <>
      <header className="site-header sticky-top">
        <nav className="navbar navbar-expand-sm navigation-bar navbar-dark">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
            data-bs-auto-close="true"
            id="navButton"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end center"
            id="navbarNav"
          >
            <ul className="nav navbar-nav">
              {/* ADD LOGO MAYBE */}
              <li className="nav-item active">
                <Link to="/about" className="nav-link active">
                  About
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/contact" className="nav-link active">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
