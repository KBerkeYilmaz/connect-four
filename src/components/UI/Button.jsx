const Button = (props) => {
    const classes = "bg-accent-color flex justify-center items-center rounded-full "
  return <div className={`${classes} ${props.className}`}>{props.children}</div>;
};

export default Button;
