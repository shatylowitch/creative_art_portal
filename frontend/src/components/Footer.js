import React from "react";

function Footer() {
  return (
    <div class="d-flex flex-column h-100">
      <footer class="footer mt-auto py-3 bg-dark">
        {/* <div class="container"> */}
          <span class="text-muted">
            <div id="footer" className="footer-container">
              <div className="social-icons">
                <h3>Connect</h3>
                <i className="social-icon fa-brands fa-twitter"></i>
                <i className="social-icon fa-brands fa-facebook-f"></i>
                <i className="social-icon fa-brands fa-instagram"></i>
                <i className="social-icon fa-solid fa-envelope"></i>
                <p className="copyright">© 2022 Creative Art Portal</p>
              </div>
            </div>
          </span>
        {/* </div> */}
      </footer>
    </div>
  );
}

export default Footer;
