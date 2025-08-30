import "./css/App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

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
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas iste nostrum quam repellat et recusandae!"
          personType="Friend" 
        />
        <ProfileCard 
          imageUrl="src/img/teacher-avatar.jpg"
          name="John Doe"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab numquam laudantium fuga, esse eius natus."
          personType="Teacher" 
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
