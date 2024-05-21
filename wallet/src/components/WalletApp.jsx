import { useState } from "react";

const WalletApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Wallet from remote</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default WalletApp;
