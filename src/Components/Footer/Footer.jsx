import ContactModal from "../ContactModal/ContactModal";
import "./Footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      {/* robdog copyright */}
      <i
        style={{
          fontSize: "11px",
          textAlign: "center",
          color: "#fff",
          display: "inline",
          marginRight: "10px",
        }}
      >
        Robdog © {year}
      </i>
      {/* twitter link */}
      <a href="http://www.twitter.com/mageiden">
        <i className="rob fab fa-twitter"></i>
      </a>
    </div>
  );
}
export default Footer;
