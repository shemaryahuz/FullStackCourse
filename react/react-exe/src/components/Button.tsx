import "../css/Button.css"; 
import type { PersonType } from "./ProfileCard";

type BtnProps = {
  personType?: PersonType;
}

export default function Button(props: BtnProps) {

  const btnStyle = () => {
    switch (props.personType) {
      case "Student":
        return { 
          backgroundColor: "purple",
          color: "pink"
        };

      case "Friend":
        return { 
          backgroundColor: "green",
          color: "lightgreen"
        }

      case "Teacher":
        return {
          backgroundColor: "blue",
          color: "lightblue"
        }
    }
  }
  return (
    <button className="button" style={btnStyle()}>
        Contact Me
    </button>
  )
}
