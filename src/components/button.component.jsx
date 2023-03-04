import "../styles/button.css";

const Button = ({ className, title, onClick, content }) => {
  return (
    <button className={className} title={title} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
