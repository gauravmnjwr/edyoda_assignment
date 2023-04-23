import "./App.css";
import Header from "./components/Header";
import Pages from "./components/Pages";
import StudentDetails from "./components/StudentDetails";

function App() {
  const handleDataPage = (query) => {
    console.log(query);
  };
  return (
    <div>
      <Header />
      <StudentDetails />
      <Pages handleDataPage={handleDataPage} />
    </div>
  );
}

export default App;
