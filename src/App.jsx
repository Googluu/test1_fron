import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRouter } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import ListPost from "./components/ListPost";
import MovieDetailsPage from "./components/MovieDetailsPage";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRouter>
                <Home />
              </ProtectedRouter>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/listpost" element={<ListPost />} />
          <Route path="/listpost/:id" element={<MovieDetailsPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
