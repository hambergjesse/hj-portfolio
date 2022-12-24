const Button = (props) => {
  const resumeButton = {
    border: "1px solid var(--brand-main-bright)",
    borderRadius: "7.5px",
    padding: "8px 12px",
    width: "69.25px",
  };

  const listItem = {
    fontSize: "10px",
    fontWeight: "400",
  };

  // on hover
  const MouseOver = (event) => {
    event.target.style.color = "var(--brand-main-bright)";
  };
  const MouseOut = (event) => {
    event.target.style.color = "";
  };

  return (
    <div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
          style={resumeButton}
          className="nav--resume--button"
        >
          <ul>
            <li style={listItem}>{props.text}</li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default Button;
