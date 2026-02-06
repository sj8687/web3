import { useParams } from "react-router-dom";

// About.jsx
function Menu() {
      const { id } = useParams();
  return <h1>About Page {id}</h1>;
}

export default Menu;
