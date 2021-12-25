export default function Footer() {
    return (
      <div className="footer">
        <a  title="its just me" target="_blank" href="https://github.com/LatifY" className="footer-credit">
          <img
            draggable={false}
            className="footer-credit-image"
            src={require("./images/me.png")}
            alt="latif"
          />
          <div className="footer-credit-text">
            <span className="footer-credit-text-name">Latif Yılmaz</span>
            <br />
            <span className="footer-credit-text-description">Developer</span>
          </div>
        </a>
      </div>
    );
  }