const Container = (props) => {
  const classes = "z-20 bg-white border-4 border-b-[12px] border-solid border-black rounded-3xl " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Container;
