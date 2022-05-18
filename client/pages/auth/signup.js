export default () => {
  return (
    <form action="">
      <h1>Sign Up</h1>
      <div className="form-group">
        <label htmlFor="">Email Address</label>
        <input className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <input type="password" className="form-control" />
      </div>
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};