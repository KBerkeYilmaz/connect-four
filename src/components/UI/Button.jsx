const Button = (props) => {
  const baseClasses =
    "bg-accent-color hover:bg-indigo-500 transition duration-50 ease-out hover:ease-in flex justify-center items-center rounded-full ";
  return (
    <button id={props.id} onClick={props.onClick} className={`${baseClasses} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
