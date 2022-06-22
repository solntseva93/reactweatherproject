export default function Form() {
  return (
    <form className="mb-3">
      <div className="row">
        <div className="col-8">
          <input
            type="text"
            placeholder="Enter your city name..."
            className="form-control"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
