import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer } from "./UI";

import { useState } from "react";
import { Home, Runs, Registration, News } from "./pages";


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  };
  const routing = [
    { path: "/", element: <Home isMenuOpen={isMenuOpen} />},
    { path: '/home', element: <Home isMenuOpen={isMenuOpen}/>},
    {path: '/runs', element: <Runs isMenuOpen={isMenuOpen}/>},
    {path: '/news', element: <News isMenuOpen={isMenuOpen}/>},
    {path: '/registration', element: <Registration isMenuOpen={isMenuOpen}/>}
   
  ];
  return (
   <>
      <Router>
        <Navigation onToggleMenu={handleToggleMenu}/>
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
