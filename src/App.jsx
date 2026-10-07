import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Running");

  const restartServer = () => {
    setStatus("Restarting...");

    setTimeout(() => {
      setStatus("Running");
    }, 2000);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">DevOps<span>Hub</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#deployment">Deployment</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">MY FIRST DEVOPS PROJECT</p>

          <h1>
            React App on
            <span> AWS EC2</span>
          </h1>

          <p className="hero-text">
            A simple React application deployed using Docker, Nginx and
            Amazon EC2.
          </p>

          <div className="hero-buttons">
            <a href="#deployment" className="primary-btn">
              View Deployment
            </a>

            <a href="#services" className="secondary-btn">
              View Services
            </a>
          </div>
        </div>

        <div className="server-box">
          <div className="server-header">
            <span>EC2 INSTANCE</span>
            <span className="online">● Online</span>
          </div>

          <div className="server-content">
            <div className="server-icon">☁</div>

            <h2>{status}</h2>
            <p>Amazon Web Services</p>

            <div className="server-details">
              <div>
                <span>Environment</span>
                <strong>Production</strong>
              </div>

              <div>
                <span>Server</span>
                <strong>EC2</strong>
              </div>

              <div>
                <span>Port</span>
                <strong>80</strong>
              </div>
            </div>

            <button className="restart-btn" onClick={restartServer}>
              Restart Server
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="section-title">
          <p>TECHNOLOGIES USED</p>
          <h2>My DevOps Stack</h2>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-icon react-icon">⚛</div>
            <h3>React</h3>
            <p>
              Frontend application created using React and Vite.
            </p>
            <span className="tag">Frontend</span>
          </div>

          <div className="card">
            <div className="card-icon docker-icon">🐳</div>
            <h3>Docker</h3>
            <p>
              Application is packaged and deployed inside a Docker container.
            </p>
            <span className="tag">Container</span>
          </div>

          <div className="card">
            <div className="card-icon aws-icon">☁</div>
            <h3>AWS EC2</h3>
            <p>
              The Docker container runs on an Amazon EC2 cloud server.
            </p>
            <span className="tag">Cloud</span>
          </div>

          <div className="card">
            <div className="card-icon nginx-icon">🌐</div>
            <h3>Nginx</h3>
            <p>
              Nginx serves the production React files to the browser.
            </p>
            <span className="tag">Web Server</span>
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="deployment" id="deployment">
        <div className="section-title">
          <p>DEPLOYMENT PROCESS</p>
          <h2>How My App Reaches the Internet</h2>
        </div>

        <div className="pipeline">

          <div className="pipeline-step">
            <div className="step-number">1</div>
            <h3>Write Code</h3>
            <p>Create the React application.</p>
          </div>

          <div className="arrow">→</div>

          <div className="pipeline-step">
            <div className="step-number">2</div>
            <h3>Build Docker Image</h3>
            <p>Create an image using Dockerfile.</p>
          </div>

          <div className="arrow">→</div>

          <div className="pipeline-step">
            <div className="step-number">3</div>
            <h3>Deploy to EC2</h3>
            <p>Run the Docker container on AWS.</p>
          </div>

          <div className="arrow">→</div>

          <div className="pipeline-step">
            <div className="step-number">4</div>
            <h3>Open Website</h3>
            <p>Access the app using the EC2 IP.</p>
          </div>

        </div>
      </section>

      {/* Status */}
      <section className="status-section">
        <div className="status-card">
          <div>
            <p className="status-label">CURRENT STATUS</p>
            <h2>
              <span className="status-dot"></span>
              Application is {status}
            </h2>
          </div>

          <div className="status-info">
            <div>
              <span>Docker</span>
              <strong>Running</strong>
            </div>

            <div>
              <span>Nginx</span>
              <strong>Running</strong>
            </div>

            <div>
              <span>EC2</span>
              <strong>Online</strong>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-content">
          <p>ABOUT THIS PROJECT</p>

          <h2>Learning DevOps Step by Step 🚀</h2>

          <p>
            This project helps me understand how a frontend application can
            be built, containerized using Docker and deployed on an AWS EC2
            instance.
          </p>

          <div className="learning-list">
            <div>✓ React Development</div>
            <div>✓ Docker Containers</div>
            <div>✓ Nginx Web Server</div>
            <div>✓ AWS EC2 Deployment</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>My First DevOps Project © 2026</p>
      </footer>
    </div>
  );
}

export default App;