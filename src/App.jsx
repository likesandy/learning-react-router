import { useNavigate, Routes, Route, Link, NavLink, Navigate, useRoutes } from "react-router-dom";

// import Home from "./routes/01-basic-use/home";
// import About from "./routes/01-basic-use/about";
// import Details from "./routes/02-route-params/details";
// import User from "./routes/02-route-params/user";

import routes from "./routes";

export default function App() {
  // https://reactrouter.com/en/main/hooks/use-navigate
  const navigate = useNavigate();

  return (
    <div>
      <header>header</header>
      <hr />

      <nav>
        {/* vs link better through class better modify style */}
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>

        {/* code jump route  */}
        <button onClick={(e) => navigate("/about")}>jump about</button>

        {/* dynamic route */}
        <NavLink to="/details/20">details</NavLink>

        {/* queryString */}
        <NavLink to="/user?name=tao&age=18">user</NavLink>
      </nav>

      <main>
        {/* Route map */}

        {/* <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/user" element={<User />} />
        </Routes> */}
        {useRoutes(routes)}
      </main>
      <hr />

      <footer>footer</footer>
    </div>
  );
}
