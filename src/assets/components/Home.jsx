import BlogList from "./BlogList.jsx";
import useFecth from "./useFecth.jsx";

export default function Home() {
  const url = `http://localhost:8000/blogs?_sort=id,id&_order=asc`;
  const { data: blogs, error } = useFecth(url);
  return (
    <div>
      {error && <p className="error">Une erreur s'est produite...</p>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
