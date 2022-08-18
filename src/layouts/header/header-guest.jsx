import { Button } from "../../components";

import { handleLogin, handleRegister } from "../../helpers";

export function HeaderGuest() {
  return (
    <>
      <Button handleClick={handleLogin} status="form form-primary" label="bağlan" />
      <Button handleClick={handleRegister} status="form form-outline-primary" label="kayıt" />
    </>
  );
}
