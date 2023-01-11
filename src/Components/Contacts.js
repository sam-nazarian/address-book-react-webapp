const Contacts = (props) => {
  return (
    <ul>
      {props.data.map((data) => {
        return (
          <li key={data.key}>
            {data.name}, {data.age}
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
