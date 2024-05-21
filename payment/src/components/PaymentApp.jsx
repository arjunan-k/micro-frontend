import { useState } from "react";

const PaymentApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, saepe,
          voluptate natus quisquam mollitia possimus perferendis quibusdam
          nostrum inventore iste obcaecati deserunt vero ullam velit aliquid
          tempora tempore incidunt rerum, reprehenderit provident reiciendis
          dolores explicabo minima voluptas. Eligendi, eos natus. Nostrum
          deleniti impedit, obcaecati totam harum, ex autem nobis vitae error
          iste quas itaque. Architecto iure quasi odit dolorem dolor earum natus
          inventore nesciunt fuga repellendus iste est, deleniti recusandae
          consequuntur praesentium sunt officia molestias labore, consequatur
          omnis. Minima incidunt deleniti veniam illo eius qui totam nostrum
          libero ab? Excepturi ratione, delectus aut cumque veritatis iure autem
          perferendis sint iusto.
        </p>
      </div>
    </div>
  );
};

export default PaymentApp;
