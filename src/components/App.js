import video from "../data/video.js";
import Content from "./Content.js";
import Description from "./Description.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
     <Content  video={video}/>
     <Description data={video} />
    </div>
  );
}

export default App;
