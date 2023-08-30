import { useState } from "react";

const Holes = (props) => {
  const [hasChips, setHasChips] = useState(false);

  const handleClick = (e) => {
    let target = e.target;
    console.log(target.id);
    setHasChips(!hasChips);
    
  };

  return (
    <div
      key={props.id}
      id={props.id}
      onClick={handleClick}
      className="w-auto h-auto flex justify-center items-center"
    >
      <div
        id={props.id}
        className={`border-4 w-8/12 h-full border-black transition-all ease-in-out delay-50 ${hasChips ? "bg-red-600" : "bg-violet-600"} border-t-[10px]  rounded-[100%] cursor-pointer`}
      ></div>
    </div>
  );
};

export default Holes;
