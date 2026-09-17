import { KageLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

function App() {  
  return (
    <div className="shader-frame" style={{ width: "100%", height: "100vh" }}>
      <KageLandingPage
        headingFont="onest"
        bodyFont="onest"
        headingWeight="400"
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={46}
        bodySize={17}
        headingLetterSpacing={-0.012}
      />
    </div>
  )
}

export default App
