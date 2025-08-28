import "./css/App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="cards-container">
        <ProfileCard 
          imageUrl="src/img/student-avatar.jpg"
          name="David Cohen"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptate dolor aperiam accusamus facere dolores."
          personType="Student" 
        />
        <ProfileCard 
          imageUrl="src/img/f-avatar.jpg"
          name="Bobe Son"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptate dolor aperiam accusamus facere dolores."
          personType="Friend" 
        />
        <ProfileCard 
          imageUrl="src/img/teacher-avatar.jpg"
          name="John Doe"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptate dolor aperiam accusamus facere dolores."
          personType="Teacher" 
        />
      </div>

    </div>
  );
}

export default App;
