const Table = (props) => {
  return (
    <div className="w-screen h-screen bg-background-main -z-10 flex flex-col items-center justify-center gap-10">
      {props.children}
      <div className="bg-accent-color w-screen h-52 absolute bottom-0 rounded-tl-[8rem] rounded-tr-[8rem]"></div>
    </div>
  );
};

export default Table;
