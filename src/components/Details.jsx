import { useQuery, gql } from "@apollo/client";

const GET_Movie = gql`
  query GetMovie($id: ID!) {
    movie(id: $id) {
      id
      name
      description
      image
      relaseData
    }
  }
`;

export function MovieDetails({ movieId }) {
  const { loading, error, data } = useQuery(GET_Movie, {
    variables: { id: movieId },
  });

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  const { name, description, image, relaseData } = data.movie;

  return (
    <div className="card mb-3">
      <img src={image} alt="image" width="100%" height="100%" />
      <div className="card-body">
        <h1 className="uppercase mb-2 fs-1">{name}</h1>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">{relaseData}</small>
        </p>
      </div>
    </div>
  );
}
