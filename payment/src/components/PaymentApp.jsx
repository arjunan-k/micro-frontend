import "./PaymentApp.css";
import { useState, useEffect, useCallback } from "react";

const PaymentApp = () => {
  const [users, setUsers] = useState([]);
  const [highlight, setHighlight] = useState(false);

  const fetchUsers = useCallback(async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    const fetchedUsers = await data.users;
    setUsers(fetchedUsers);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="payment-container">
      <h1>Payment Repository</h1>
      <section className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.image} alt="" className="user-image" />
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>My age is {user.age}</p>
            <button onClick={() => setHighlight(!highlight)}>Highlight</button>
            {highlight && (
              <div>
                <p>Blood group is {user.bloodGroup}</p>
                <p>Height: {user.height}</p>
                <p>Weight: {user.weight}</p>
                <p>Eye colour is {user.eyeColor}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default PaymentApp;
