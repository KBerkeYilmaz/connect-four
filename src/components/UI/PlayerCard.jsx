import Container from "./Container";

const PlayerCard = (props) => {
  let positionClasses = "";

  if (props.position === "left") {
    positionClasses = "left-56";
  } else if (props.position === "right") {
    positionClasses = "right-56";
  }

  let playerColor = "";
  if (props.playerNo === 1) {
    playerColor = "#ef4444";
  } else if (props.playerNo === 2) {
    playerColor = "#eab308";
  }
  return (
    <Container
      className={`absolute w-40 h-48 top-1/3 ${positionClasses} flex flex-col justify-end items-end pb-2`}
    >
      <div className="absolute -top-12 left-10">
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 24 24"
          fill={playerColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#1C274C"
            stroke-width="1.5"
          />
          <path
            d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
            fill="#1C274C"
          />
          <ellipse
            cx="9"
            cy="10.5"
            rx="1"
            ry="1.5"
            fill="#1C274C"
          />
        </svg>
      </div>
      <h2 className="flex justify-center items-center w-full h-1/5 text-3xl font-extrabold">
        PLAYER {props.playerNo}
      </h2>
      <p className="flex justify-center items-center w-full h-3/5 text-6xl font-bold">
        {props.playerScore}
      </p>
    </Container>
  );
};

export default PlayerCard;
