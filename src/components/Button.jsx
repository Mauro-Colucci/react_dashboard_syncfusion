import { useStateContext } from "../context/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { handleClick } = useStateContext();

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`${size} p-3 ${width} hover:drop-shadow-xl hover:${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
