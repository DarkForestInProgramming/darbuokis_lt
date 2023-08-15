import LoginForm from "./LoginForm";
import LoginExtraSection from "./LoginExtraSection";
import LoginHeader from "./LoginHeader";
import LoginFetch from "../../../../Api/loginFetch";

const LoginPageMain = () => {
  const { email, setEmail, password, setPassword, handleLoginSubmit } =
    LoginFetch();
  return (
    <>
      <LoginHeader />
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLoginSubmit={handleLoginSubmit}
      />
      <LoginExtraSection />
    </>
  );
};

export default LoginPageMain;
