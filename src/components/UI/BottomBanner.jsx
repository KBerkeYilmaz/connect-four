const BottomBanner = (props) => {
  return (
    <div className="absolute bottom-0 h-1/5 w-full bg-violet-800 rounded-t-[4rem] flex justify-center items-center">
      
      <div className="z-30 absolute bottom-12 right-0 left-0 top-0 m-auto h-full w-52 bg-red-400 border-l-4 border-r-4 border-b-[12px] border-solid border-black rounded-b-3xl flex flex-col justify-center items-center
      border-t-l-trans
      
      ">
        <p className="text-white text-xl">Player {props.playerTurn}'s Turn</p>
      </div>
    </div>
  );
};

export default BottomBanner;
