import React from "react";
/*
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateAccountType } from "../../app/reducers/UserInformation";
*/

export function Login() {
/*
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const accountTypeOptions = useAppSelector(selectAccountTypeOptions);

  const setSignUpMethod = function (accountType: string) {
    dispatch(updateAccountType(accountType));
    dispatch(updateProofUpRequired(accountType !== "Federated"));
    dispatch(getImageFromAPI());
    navigate("/s2");
  };
  */

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

