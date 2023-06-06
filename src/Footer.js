import { Link } from "react-router-dom";

const footer = () => {
    return ( 
        <footer className="navbar">
      <p>Filter by name</p>
      <div className="links">
        <Link to="/blogs/male" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Male</Link>
        <Link to="/blogs/female" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Female</Link>
      </div>
    </footer>

     );
}
 
export default footer;