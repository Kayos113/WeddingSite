import Header from "./components/Header"
import Information from "./components/Information"
import TabBar from "./components/TabBar"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="multi-tab-pane">
      <TabBar />
      <Information />
      </div>

    </div>
  );
}

export default App;
