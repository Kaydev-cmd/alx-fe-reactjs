import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/* <Header />
      <MainContent />
      <UserProfile
        image="src/assets/image_1.png"
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />
      <Footer /> */}
      <Counter />
    </>
  );
}

export default App;
