const BottomBanner = (props) => {
  return (
    <div className="relative left-0 right-0 top-[80%] h-1/5 w-full bg-violet-800 rounded-t-[4rem] ">
      <div className="z-30 absolute -top-3/4 right-0 left-0 m-auto h-full w-60">
        {/* <svg
          width="250"
          height="250"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100,50 L 10,90 L 190,90 Z"
            fill="#f87171"
            stroke="black"
            strokeWidth="2"
          />
        </svg> */}
        <div className="z-30 absolute bottom-0 right-0 left-0 top-56 m-auto h-4/6 w-64 bg-red-400 border-l-4 border-r-4 border-t-4 border-b-[12px] border-solid border-black rounded-2xl flex flex-col justify-start items-center">
          <p className="text-white text-2xl mt-2 font-mono font-extrabold">
            Player {props.playerTurn}'s Turn
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
