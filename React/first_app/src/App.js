import Profile from "./Components/Profile";
import "./App.css"

const profileDetails = {
  imageUrl:"",
  name: "",
  role: "Sr. Software Engineer",
};

const App = () => (
  <h1>Profile List</h1>,

  <Profile userDetails={Profile} />

);

export default App;
