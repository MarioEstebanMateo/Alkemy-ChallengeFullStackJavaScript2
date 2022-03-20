import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../styles/Home.css";
import Balance from "./Balance";
import Form from "./Form";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = (props) => {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    getMovements();
  }, []);

  const getMovements = async () => {
    const response = await axios.get("http://localhost:4000/movements");
    setMovements(response.data);
  };

  const deleteMovement = async (id) => {
    await axios.delete(`http://localhost:4000/delete/${id}`);
    getMovements();
  };

  return (
    <>
      <Navbar />
      <Balance />
      <div className="container-fluid">
        <div className="movements_list_title">
          <h2>Movements List</h2>
        </div>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col" col-sm-3>
                Concept
              </th>
              <th scope="col" col-sm-1>
                Amount
              </th>
              <th scope="col" col-sm-2>
                Date
              </th>
              <th scope="col" col-sm-3>
                Type of Movement
              </th>
              <th scope="col" col-sm-3>
                Edit / Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {movements.map((item) => (
              <tr key={item.id}>
                <td>{item.concept}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td className="movements_buttons">
                  <Link to={`/edit/${item.id}`} className="btn btn-primary">
                    <i class="fas fa-pencil-alt"></i> Edit
                  </Link>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteMovement(item.id)}
                  >
                    <a href=""></a>
                    <i class="fas fa-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Form />
      <Footer />
    </>
  );
};

export default Home;
