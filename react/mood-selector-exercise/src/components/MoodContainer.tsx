import { useState } from "react";
import Buttons from "./Buttons"
import DisplayBox from "./DisplayBox"

const displayMoods = {
    neutral: "Neutral 😐",
    happy: "Happy 😀",
    sad: "Sad 😢",
    angry: "Angry 😡"
};

interface MoodState {
  curMood: string;
  prevMood: string | null;
  history: string[];
  counts: Record<string, number>;
}

const initialState: MoodState = {
  curMood: "neutral",
  prevMood: null,
  history: [],
  counts: {
    neutral: 1,
    happy: 0,
    sad: 0,
    angry: 0
  }
};

export default function MoodContainer() {
  const [ state, setState ] = useState<MoodState>(initialState);

  console.log(state);

  const changeMood = (newMood: string) => {
    setState(state => ({
      ...state,
      curMood: newMood,
      prevMood: state.curMood,
      history: [...state.history, state.curMood],
      counts: {
        ...state.counts,
        [newMood]: state.counts[newMood] + 1
      }
    }));
  };

  const setRandom = () => {
    const moodsArr = Object.keys(state.counts);
    const random = Math.floor(Math.random() * moodsArr.length);
    changeMood(moodsArr[random]);
  }

  const reset = () => {
    setState(initialState);
  }

  return (
    <div className="mood-container">
      <Buttons  
        onMoodChange={changeMood} 
        onRandom={setRandom}
        onReset={reset}
      />
      <DisplayBox 
        curMood={displayMoods[state.curMood as keyof typeof displayMoods]}
        prevMood={displayMoods[state.prevMood as keyof typeof displayMoods]}
        history={state.history}
      />
    </div>
  )
}
