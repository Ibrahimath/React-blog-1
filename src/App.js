import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Footer from './Footer';
import Male_blogs from './Male-blogs';
import Female_blogs from './Female-blogs';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/create" element={<Create />} />
          <Route path="/blogs/male" element={<Male_blogs />} />
          <Route path="/blogs/female" element={<Female_blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          
          <Route path="*" element={<NotFound />} />
            {/* <Route exact path="/">
              <Home />
            </Route> */}
            {/* <Route path="/create">
              <Create />
            </Route> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;