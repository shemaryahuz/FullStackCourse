import { displayMoods } from "./MoodContainer";

type DisplayBoxProps = {
    curMood: string;
    prevMood: string;
    history: string[];
    counts: Record<string, number>
}

export default function DisplayBox ({curMood, prevMood, history, counts}: DisplayBoxProps) {
  return (
    <div className="display-box">
      <div>Current Mood: {curMood}</div>
      {prevMood && 
        <div>Previous Mood: {prevMood}</div>
      }
      {history.length ?
        <div>
          History:
          {history.slice(-3).map((mood) => {
              return (
                <span>{displayMoods[mood as keyof typeof displayMoods]}. </span>
              )
            })
          }
        </div>: null
      }
      <div>
        Counts: 
        {Object.keys(counts).map((count) => {
            return (
              <div>{count}: {counts[count]}</div>
            )
          })
        }
      </div>
    </div>
  )
}
