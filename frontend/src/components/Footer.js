import React from "react";

function Footer() {
  return (
    <div className="d-flex flex-column h-100 mb-5">
      <main className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5 quotes text-center">
            If you can see beauty in everything, you are an artist.
          </h1>
        </div>
      </main>

      <footer className="footer mt-auto py-3 bg-dark mt-2">
        <div className="container">
          <span>
            <div id="footer" className="footer-container">
              <div className="social-icons">
                <h3>Connect</h3>
                <i className="social-icon fa-brands fa-facebook-f"></i>
                <i className="social-icon fa-brands fa-instagram"></i>
                <i className="social-icon fa-solid fa-envelope"></i>
                <p className="copyright">© 2022 Creative Art Portal</p>
              </div>
            </div>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
