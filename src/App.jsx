import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="container">
      <div className="instructions-card">
        <div className="title">
          <h2>Move Around!</h2>
        </div>
        <div className="keys">
          <h3>W - Go forward</h3>
          <h3>S - Go backwards</h3>
          <h3>A - turn left</h3>
          <h3>D - turn right</h3>
        </div>
      </div>
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/0AkAc1CDzXUadFsY/scene.splinecode" />
      </div>
    </div>
  );
}

export default App;
