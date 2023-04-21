import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./containers/Public";
import { path } from "./ultil/constain";
function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
//npx create-react-app .
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init -p
//npm i redux react-redux redux-persist
//npm install react-icons
