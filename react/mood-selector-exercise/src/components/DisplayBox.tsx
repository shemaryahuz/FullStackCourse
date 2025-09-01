
type DisplayBoxProps = {
    curMood: string;
    prevMood: string;
    history: string[];
}

export default function DisplayBox ({curMood, prevMood, history}: DisplayBoxProps) {
  return (
    <div className="display-box">
      <section>Current Mood: {curMood}</section>
      {prevMood && 
        <section>Previous Mood: {prevMood}</section>
      }
      {history.length ?
        <section>
          History:
          {history.map((mood) => {
              return (
                <span>{mood} |</span>
              )
            })
          }
        </section>: null
      }
    </div>
  )
}
