const BottomBanner = (props) => {
  return (
    <div className="relative left-0 right-0 top-[80%] h-1/5 w-full bg-violet-800 rounded-t-[4rem] ">
      <div className="z-30 absolute -top-3/4 right-0 left-0 m-auto h-full w-52">
        <svg
          width="15.3rem"
          height="12.5rem"
          viewBox="1 0 13 0.1"
          fill="#f87171"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1,2 L6.5,0 L12,2" 
            stroke="black"
            strokeWidth="0.15"
            fill="#f87171" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="z-30 absolute bottom-12 right-0 left-0 top-0 m-auto h-5/6 w-52 bg-red-400 border-l-4 border-r-4 border-b-[12px] border-solid border-black rounded-b-3xl flex flex-col justify-start items-center">
        <p className="text-white text-3xl mt-2 font-mono font-extrabold">Player {props.playerTurn}'s Turn</p>
      </div>
    </div>
  );
};

export default BottomBanner;
