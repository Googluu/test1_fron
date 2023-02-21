import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

import { TEST_QUERY } from "./ListPost";
import { useAuth } from "../context/authContext";

const CREATE_MOVIE = gql`
  mutation CreateMovie(
    $name: String!
    $description: String!
    $image: String!
    $relaseData: String!
  ) {
    createMovie(
      name: $name
      description: $description
      image: $image
      relaseData: $relaseData
    ) {
      name
    }
  }
`;

export const Home = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const { user, logout, loadingauth } = useAuth();
  const [createMovie] = useMutation(CREATE_MOVIE, {
    // fetch the list of messages again for update
    refetchQueries: [{ query: TEST_QUERY }],
  });

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loadingauth) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <div className="mb-5">
        <div>
          <h1 className="">Welcome {user.displayName || user.email}</h1>
          <button
            className="btn btn-primary float-right"
            onClick={handleLogout}
          >
            logout
          </button>
          <button className="btn btn-primary float-left">
            <Link to="/listpost">POSTs</Link>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="uppercase mb-3 fs-1 text-center">
            Create a new postmovie
          </h1>
          <div className="card">
            <div className="card-body">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await createMovie({
                    variables: { name, description, image, releaseDate },
                  });
                  window.location.href = "/listpost";
                }}
              >
                <div className="form-group mb-2">
                  <input
                    type="text"
                    placeholder="Url Image"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <textarea
                    rows="4"
                    placeholder="Content..."
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    placeholder="release date"
                    className="form-control"
                    value={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary btn-blog">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
