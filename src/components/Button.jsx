const Button = (props) => {
  const resumeButton = {
    border: "1px solid var(--brand-main-bright)",
    borderRadius: "5px",
    padding: "8px 12px",
    width: "69.25px",
  };

  const listItem = {
    fontSize: "10px",
    fontWeight: "400",
  };

  return (
    <div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div style={resumeButton} className="nav--resume--button">
          <li style={listItem}>{props.text}</li>
        </div>
      </a>
    </div>
  );
};

export default Button;
