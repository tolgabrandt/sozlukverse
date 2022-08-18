import { useContext } from "react";
import { Button } from "../../components";
import { AuthContext } from "../../context/auth-context";
import { handleLogin, handleRegister } from "../../helpers";

export function HeaderGuest() {
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = () => {
    handleLogin(dispatch);
  };

  return (
    <>
      <Button handleClick={handleSubmit} status="form form-primary" label="bağlan" />
      <Button handleClick={handleRegister} status="form form-outline-primary" label="kayıt" />
    </>
  );
}
