import { useFormik } from "formik";
import { useEffect, useState } from "react";

export interface Props {
  name: string;
  email: string;
  seatNo: string;
  date: string;
}

const Book = () => {
  const seats = [
    1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [user, setUser] = useState<Props[]>([]);

  useEffect(() => {
    const oldUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUser(oldUsers);
  }, []);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      seatNo: "",
      date: "",
      sex: "male",
    },
    onSubmit: (values) => {
      const newUser = [...user, values];
      setUser(newUser);
      localStorage.setItem("users", JSON.stringify(newUser));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="formContainer">
        <div>
          <label>Name</label>
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>

        <div className="eleDiv">
          <label>Email</label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="eleDiv">
          <label htmlFor="sex">Sex</label>
        </div>
        <div>
          <label style={{ marginLeft: "20px" }} htmlFor="male">
            Male
          </label>
          <input
            type="radio"
            id="male"
            name="sex"
            value={"male"}
            checked={formik.values.sex == "male"}
            onChange={formik.handleChange}
          />
          <label htmlFor="female"> Female</label>
          <input
            type="radio"
            id="female"
            name="sex"
            value={"female"}
            checked={formik.values.sex == "female"}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label>Seat No</label>
        </div>
        <div className="eleDiv">
          <select
            name="seatNo"
            value={formik.values.seatNo}
            onChange={formik.handleChange}
          >
            <option>Select Seat</option>
            {seats.map((seat) => (
              <option value={seat}>{seat}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Date</label>
        </div>
        <div className="eleDiv">
          <input
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
          />
        </div>
        <button className="btn btn-primary formbtn" type="submit">
          Book
        </button>
      </div>
    </form>
  );
};

export default Book;
