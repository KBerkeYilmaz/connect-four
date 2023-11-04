const Table = (props) => {
  return (
    <div className="w-screen h-screen bg-background-main -z-10 flex flex-col items-center justify-center gap-10">{props.children}</div>
  );
};

export default Table;
