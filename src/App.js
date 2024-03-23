// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header";
import Footer from "./Footer";
import AllNews from "./News/AllNews";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="">
          <div className="row">
            <div className="col-md">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/General"
                  element={<AllNews key="general" category="General" />}
                />
                <Route
                  path="/Entertainment"
                  element={
                    <AllNews key="entertainment" category="Entertainment" />
                  }
                />
                <Route
                  path="/Technology"
                  element={<AllNews key="technology" category="Technology" />}
                />
                <Route
                  path="/Sports"
                  element={<AllNews key="sports" category="Sports" />}
                />
                <Route
                  path="/Business"
                  element={<AllNews key="business" category="Business" />}
                />
                <Route
                  path="/Health"
                  element={<AllNews key="health" category="Health" />}
                />
                <Route
                  path="/Science"
                  element={<AllNews key="science" category="Science" />}
                />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
        {/* <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/allnews' element={<AllNews />}></Route>
        </Routes> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
