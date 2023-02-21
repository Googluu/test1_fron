import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

export const TEST_QUERY = gql`
  query {
    movies {
      id
      name
      description
      image
      relaseData
    }
  }
`;

const ListPost = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const { data, loading, error } = useQuery(TEST_QUERY);

  useEffect(() => {
    if (data) {
      const filtered = data.movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTasks(filtered);
    }
  }, [searchTerm, data]);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand uppercase mb-2 fs-5">
            <Link to="/">CreatePost</Link>
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movie"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <h1 className="text-center text-uppercase mb-10 fs-1">POSTs</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
        {filteredTasks.map((movie) => (
          <div key={movie.id}>
            <div className="col">
              <div className="card">
                <img src={movie.image} alt="image" width="100%" height="auto" />
                <div className="card-body">
                  <h1 className="card-title uppercase fs-5">{movie.name}</h1>
                  <p className="card-text text-secondary mb-3">
                    {movie.relaseData}
                  </p>
                  <a
                    href={`/listpost/${movie.id}`}
                    className="btn btn-outline-info"
                  >
                    Ver Detalles
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPost;
