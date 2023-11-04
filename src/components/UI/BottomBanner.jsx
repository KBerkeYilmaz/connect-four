const BottomBanner = (props) => {
  return (
        <div className="z-30 absolute bottom-0 right-0 left-0 top-[75%] m-auto h-1/6 w-64 bg-player1 border-l-4 border-r-4 border-t-4 border-b-[12px] border-solid border-black rounded-2xl flex flex-col justify-start items-center">
          <p className="text-white text-xl mt-2 font-mono font-extrabold">
            Player {props.playerTurn}'s Turn
          </p>
        </div>
  );
};

export default BottomBanner;
