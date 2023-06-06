import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Female_blogs = () => {
    
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

      
  //blogs && blogs.filter((blog)=> blog.author === "mario")

  //console.log(blogs[1].author)
  

  return (
    <div className="blog-list">
    {blogs && blogs.filter((blog)=> blog.author === "Female").map(blog => (
      <div className="blog-preview" key={blog.id} >
        <Link to={`/blogs/${blog.id}`}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </Link>
      </div>
    ))}
  </div>
  )
}

export default Female_blogs