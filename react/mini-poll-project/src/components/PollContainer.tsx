import { useState } from "react";
import PollOption from "./PollOption";
import SubmitOption from "./SubmitOption";

interface PollData {
  options: string[];
  votesCount: Record<string, number>;
  showResults: boolean;
}

export default function PollContainer() {
  const pollState: PollData = {
    options: ["React", "Vue", "Svelte"],
    votesCount: {
      React: 0,
      Vue: 0,
      Svelte: 0,
    },
    showResults: false,
  };

  const [state, setState] = useState(pollState);

  console.log(state);

  const addOption = (option: string) => {
    setState((prev) => ({
        ...prev,
        options: [...prev.options, option],
        votesCount: {
            ...prev.votesCount,
            [option] : 0
        }
    }))
  }

  const increase = (option: string) => {
    setState((prev) => ({
      ...prev,
      votesCount: {
        ...prev.votesCount,
        [option]: prev.votesCount[option] + 1,
      },
    }));
  };

  const toggleRes = () => setState({ ...state, showResults: !state.showResults });

  const reset = () => {
    const initialCount: Record<string, number> = {};
    Object.keys(state.votesCount).map((option: string) => {
      initialCount[option] = 0;
    });
    setState((prev) => ({
      ...prev,
      votesCount: initialCount,
    }));
  };

  return (
    <div className="poll-container">
      {state.options.map((option: string) => (
        <PollOption
          key={option}
          optionName={option}
          count={state.votesCount[option]}
          toShow={state.showResults}
          onVote={increase}
        />
      ))}
      <button
        className="showBtn"
        onClick={toggleRes}
      >
        Toggle Results
      </button>
      <button 
        className="resetBtn"
        onClick={reset}
      >
        Reset Votes
      </button>
      <SubmitOption onSubmit={addOption}/>
    </div>
  );
}
