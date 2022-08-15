import "./App.css";
import Header from "./componants/Header/Header";
import Footer from "./componants/Footer/Footer";
import { words } from "./words";
function App() {
  return (
    <div className="layout">
      <Header> </Header>
      <main>{words.content}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
