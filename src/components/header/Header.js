import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Dastan</em>
          </strong>
          <br />a beginner front-end developer
        </h1>
        <div className="header__text">
          <p>I'm learning React</p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
