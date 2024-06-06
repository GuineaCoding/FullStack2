import Programme from './components/programmeMUI';
import setuCrest from "./assets/setu_crest.png";
import Box from "@mui/material/Box";

const styles = {
  appHeader: {
    backgroundColor: "lightblue",
    height: "200px",
    padding: "10px",
    color: "white",
  },
  course: {
    padding: 2,
  },
};

const App = () => {
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
  const name = "HDip Cmputer Science"; // Substitute

  return (
    <>
      <header style={styles.appHeader}>
        <img src={setuCrest} alt="logo" />
      </header>
      <Box sx={styles.course}>
        <Programme title={name} modules={modules} />
      </Box>
    </>
  );
};
export default App;