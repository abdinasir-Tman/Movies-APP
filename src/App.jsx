import "./index.css";
import Header from "./components/Header";
import Model from "./components/Model";
import MoveContainer from "./components/MoveContainer";
import Movie from "./components/Movie";

function App() {
  return (
    <div
      className="px-3 py-2 bg-no-repeat bg-cover"
      style={{
        background: `linear-gradient(rgba(021,45,20,0.2),rgba(021,45,20,0.2)),
          url('https://www.koimoi.com/wp-content/new-galleries/2023/05/fastx-lives-up-to-its-name-selling-over-1-lakh-tickets-in-advance-at-pvr-and-inox-in-india-001.jpg')`,

        height: "100%",
      }}
    >
      <Header />
      <MoveContainer />
    </div>
  );
}

export default App;
