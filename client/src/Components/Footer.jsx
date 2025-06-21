import React, { useState } from 'react';
import '../Style/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faCopy } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText('7428117322');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">Created by <br/>JASLEEN KAUR</span>
            <span className="footer-copyright">© {new Date().getFullYear()}</span>
          </div>
          <div className="footer-nav">
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              <li className="footer-link-row">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skill">Skills</a>
              </li>
              <li className="footer-link-row">
                <a href="#project">Projects</a>
                <a href="#certificate">Certificates</a>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <div className="footer-col-title">Follow</div>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/in/jasleen-kaur-3aa573305/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://github.com/Jasleen-Kaur-123" aria-label="Github" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <span className="footer-social-icon-btn" onClick={() => setEmailModalOpen(true)} aria-label="Email" tabIndex={0} role="button">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </span>
              <span className="footer-social-icon-btn" onClick={() => setCallModalOpen(true)} aria-label="Call" tabIndex={0} role="button">
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Email Modal */}
      {emailModalOpen && (
        <div className="footer-modal-overlay">
          <div className="footer-modal">
            <button className="footer-modal-close" onClick={() => setEmailModalOpen(false)}>&times;</button>
            <div className="footer-modal-content footer-modal-centered">
              <div className="footer-modal-icon">
                <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#1976d2', marginBottom: 12 }} />
              </div>
              <div className="footer-modal-title">Email</div>
              <div className="footer-modal-email">jkaurdhillon51@gmail.com</div>
            </div>
          </div>
        </div>
      )}
      {/* Call Modal */}
      {callModalOpen && (
        <div className="footer-modal-overlay">
          <div className="footer-modal">
            <button className="footer-modal-close" onClick={() => setCallModalOpen(false)}>&times;</button>
            <div className="footer-modal-content footer-modal-centered">
              <div className="footer-modal-icon">
                <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: '#1976d2', marginBottom: 12 }} />
              </div>
              <div className="footer-modal-title">Call</div>
              <div className="footer-modal-call">Jasleen Kaur - <span className="footer-modal-number">7428117322</span>
                <span className="footer-modal-copy-btn" onClick={handleCopyNumber} title="Copy Number">
                  <FontAwesomeIcon icon={faCopy} style={{ marginLeft: 8, cursor: 'pointer', color: '#1976d2' }} />
                </span>
              </div>
              {copied && <div className="footer-modal-copied-msg">Number copied!</div>}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
