import "../css/ProfileCard.css";
import Button from "./Button";

export type PersonType = "Friend" | "Teacher" | "Student";

type ProfileCardProps = {
  imageUrl: string;
  name: string;
  description: string;
  personType: PersonType;
}


export default function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="profile-card">      
      <img 
        className="avatar"
        src={props.imageUrl}
        alt={props.name}
      />
      <h3 className="name">
        {props.name}
      </h3>
      <p className="description">
        {props.description}
      </p>
      <Button personType={props.personType}/>
    </div>
  )
}
