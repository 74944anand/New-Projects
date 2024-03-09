const Show = () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  console.log(users);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Sex</th>
            <th>SeatNo</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.sex}</td>
              <td>{item.seatNo}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Show;
