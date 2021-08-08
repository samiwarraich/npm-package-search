import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <form onSubmit={onSubmit}>
        <div className="d-flex">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="form-control"
            placeholder="Search"
          />
          {/* <button className="btn btn-primary">
            <i className="fa fa-search"></i>
          </button> */}
        </div>
      </form>
      {error ? (
        <h3>{error}</h3>
      ) : loading ? (
        <div className="spinner-border mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : !error && !loading && data.length > 0 ? (
        <div className="mt-2">
          <ul>
            {data.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default RepositoriesList;
