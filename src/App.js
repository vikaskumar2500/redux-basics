import React from "react";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <React.Fragment>
      <Header />
      <section>
        {!isAuthenticated && <Auth />}
        {isAuthenticated && <UserProfile />}
      </section>
      <Counter />
    </React.Fragment>
  );
}

export default App;
