import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer } from "./UI";
import { Home, Runs, Registration, News } from "./pages";


function App() {
  const routing = [
    { path: "/", element: <Home/>},
    { path: '/home', elemnt: <Home/>},
    {path: '/runs', element: <Runs/>}
   
  ];
  return (
   <>
      <Router>
        <Navigation />
        <Routes>
          {routing.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
      <Footer />
      </>
  );
}

export default App;
