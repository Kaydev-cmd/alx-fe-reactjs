import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import ProfilePage from "./components/ProfilePage";

function App() {
  const userData = { name: "Jane Doe", email: "janedoe123@example.com" };

  return (
    <>
      {/* <Header />
      <MainContent />
      <Footer /> */}
      {/* <UserProfile
        image="src/assets/image_1.png"
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      /> */}
      <ProfilePage userData={userData} />
    </>
  );
}

export default App;
