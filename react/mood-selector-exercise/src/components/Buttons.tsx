

type ButtonsProps = {
  onMoodChange: (mood: string) => void;
  onRandom: () => void;
  onReset: () => void;
}

export default function Buttons({onMoodChange, onRandom, onReset}:ButtonsProps) {
  
  return (
    <div className="buttons-box">
      <button onClick={() => onMoodChange("happy")}>
        Happy
      </button>
      <button onClick={() => onMoodChange("sad")}>
        Sad
      </button>
      <button onClick={() => onMoodChange("angry")}>
        Angry
      </button>
      <button onClick={() => onMoodChange("neutral")}>
        Neutral
      </button>
      <button onClick={onRandom}>
        Random
      </button>
      <button onClick={onReset}>
        Reset
      </button>
    </div>
  )
}
