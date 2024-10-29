function FinishedScreen({ maxPossiblePoints, points, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "😍";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 60 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 60) emoji = "😣";
  if (percentage === 0) emoji = "😭";

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} {emoji}{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {points} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
