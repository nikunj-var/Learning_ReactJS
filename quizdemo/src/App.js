import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Components/HomePage";
import Start from "./Components/Start";
import HelloPage from "./Components/HelloPage";
// import GenerateQuiz from "./Components/Generatequiz";
import { useHistory } from "react-router-dom";
import Teacher from "./Components/Teacher";
import "firebase/firestore";
import GenerateQuiz from "./Components/Teacher";
import Student from "./Components/Student";
import RedirectedPage from "./Components/RedirectedPage";
import RedirectedPage2 from "./Components/RedirectedPage2";
import Single from "./Components/SingleValue";
import CheckValue from "./Components/CheckValue";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/test" element={<Start />} />
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/:quizId" component={GenerateQuiz} /> */}
        {/* <Route path="/" element={<GenerateQuiz />} />
        <Route path="/test" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/newpage" element={<RedirectedPage />} /> */}
        {/* <Route path="/" element={<Round1 />} /> */}
        <Route path="/" element={<Single />} />
        <Route path="/newpage" element={<RedirectedPage2 />}/>
        <Route path="/checkvalue" element={<CheckValue />}/>

        {/* <Route path="/round1" element={<Round1/>}/> */}
      </Routes>
    </div>
  );
}
export default App;
