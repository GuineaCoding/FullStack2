import Programme from './components/programme'
import setuCrest from "./assets/setu_crest.png";
import './App.css'

const App = () => {
  // Substitute your module names here.
  const modules = [
    {
      name: "Cloud Architecture",
      noLectures: 1,
      noPracticals: 2,
    },
    {
      name: "Programming",
      noLectures: 2,
      noPracticals: 3,
    },
    {
      name: "Enterprise Web Dev",
      noLectures: 2,
      noPracticals: 2,
    },
    {
      name: "Mobile App Development",
      noLectures: 2,
      noPracticals: 2,
    },
    {
      name: "Agile Software Development",
      noLectures: 2,
      noPracticals: 3,
    },
  ];
  const name = "MSc Enterprise Software Systems"; // Substitute


  return (
    <>
      <header className="App-header">
        <img className="center" src={setuCrest} alt="logo" />
      </header>
      <div className="programme">
        <Programme title={name} modules={modules} />
      </div>
    </>
  )
}

export default App

