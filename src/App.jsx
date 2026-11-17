import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";

function App() {

    return (

        <BrowserRouter>

            <nav>

                <Link to="/">Home</Link> |
                <Link to="/courses">Courses</Link> |
                <Link to="/about">About</Link>

            </nav>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/courses" element={<Courses />} />

                <Route path="/about" element={<About />} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;
