const Container = ({ children }) => {
  return (
    <div
      className="card card-body border-warning mb-3"
      style={{ width: "60%" }}
    >
      {children}
    </div>
  );
};
export default Container;
