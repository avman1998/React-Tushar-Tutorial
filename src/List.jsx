const List = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ul>
      {numbers.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};
export default List;
