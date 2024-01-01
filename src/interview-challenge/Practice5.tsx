// A timer which will have a circle that will empty out as the time goes down.

interface Props {
  size: number;
  timeRemaining: number;
  totalTime: number;
}

const Practice5 = ({ size, timeRemaining, totalTime }: Props) => {
  const stroke = size / 10;
  const xy = size / 2;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = (timeRemaining / totalTime) * circumference;

  return (
    <>
      <svg width={size} height={size}>
        <circle
          cx={xy}
          cy={xy}
          r={radius}
          stroke="red"
          strokeWidth={20}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - offset}
          fill="transparent"
        />
      </svg>
      <span>{timeRemaining}</span>
    </>
  );
};

export default Practice5;
