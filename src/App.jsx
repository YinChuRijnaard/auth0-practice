import { LoginButton } from "./components/LoginButton";
import { LogoutButton } from "./components/LogoutButton";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
      {/* <Home /> */}
    </>
  );
};
