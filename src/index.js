import {render} from "react-dom";
import App from "./App";

function Home() {
  return (
    <App />
  );
}

const rootElement = document.getElementById("root");
render(<Home />, rootElement);
