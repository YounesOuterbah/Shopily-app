import "./spinner.scss";

export const Spinner = () => {
  const dots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <div className="spinner">
        <div className="container">
          {dots.map((dot) => (
            <div
              className="spinner-rotation"
              key={dot}
              style={{
                transform: `rotate(${dot * (360 / dots.length)}deg) translateY(35px)`,
                animationDelay: `${dot * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
