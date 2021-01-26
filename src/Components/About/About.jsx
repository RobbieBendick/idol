import "./About.scss";

function About() {
  return (
    <div style={{ textAlign: "center" }}>
      <ul>
        <p>what we are about</p>
        <p> our guild goals</p>
        <p> guild achievements</p>
      </ul>
      {/* Background img */}
      <img
        className="background-img"
        src="/images/kj.jpg"
        alt="background"
      ></img>
    </div>
  );
}

export default About;
