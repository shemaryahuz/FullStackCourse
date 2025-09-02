
type PollOptionProps = {
    optionName: string;
    count: number;
    toShow: boolean;
    onVote: (option: string) => void;
}

export default function PollOption({
    optionName, count, toShow, onVote
  }: PollOptionProps) {
  return (
    <div className="poll-option">
      <h3>{optionName}</h3>
      <button 
        className="voteBtn"
        onClick={() => onVote(optionName)}
      >
        Vote
      </button>
      {
        toShow && <div className="option-count">
            Votes Count: {count}
        </div>
      }
    </div>
  )
}
