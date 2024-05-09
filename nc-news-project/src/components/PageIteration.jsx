const PageIteration = ({
  count,
  queryLimit,
  setPage,
  setQueryLimit,
}) => {
  const pageButtons = () => {
    const num = count / queryLimit;
    const pages = Math.ceil(num);

    const pagesArray = [];
    for (let i = pages; i > 0; i--) {
      pagesArray.push(
        <button
          key={i}
          onClick={() => {
            setPage(i);
          }}
          style={{
            borderColor: "white",
            backgroundColor: "white",
            color: "blue",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >{i}</button>
      );
    }
    return pagesArray;
  };
  return (
    <>
      <span className="set-limit">
        <label htmlFor="limit">Show per page:</label>
        <button onClick={() => setQueryLimit(5)}> 5</button>
        <button onClick={() => setQueryLimit(10)}>10</button>
        <button onClick={() => setQueryLimit(20)}>20</button>
      </span>
      <span
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          padding: "4%",
        }}
      >
        {pageButtons(count, queryLimit).map((tag) => {
          return tag;
        })}
        <label>Page no.</label>
      </span>
    </>
  );
};
export default PageIteration;
