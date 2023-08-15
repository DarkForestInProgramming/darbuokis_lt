import RegisterHeader from "./RegisterHeader";
import RegisterForm from "./RegisterForm";
import RegisterExtraSection from "./RegisterExtraSection";
import RegisterFetch from "../../../../Api/registerFetch";

const RegisterPageMain = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleRegisterSubmit,
  } = RegisterFetch();

  return (
    <>
      <RegisterHeader />
      <RegisterForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleRegisterSubmit={handleRegisterSubmit}
      />
      <RegisterExtraSection />
    </>
  );
};

export default RegisterPageMain;
