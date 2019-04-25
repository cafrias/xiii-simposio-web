import * as React from "react";

import Submit from "../fields/Submit";
import Notification from "../Notification";

import { FormStatus } from "./index";

type FormLayoutProps = {
  handleSubmit: React.FormEventHandler;
  children: React.ReactNode;
  presenta: boolean;
  loading: boolean;
  status: FormStatus;
};

const FormLayout = (props: FormLayoutProps) => {
  const { handleSubmit, children, presenta, loading, status } = props;

  const fields = React.Children.toArray(children);

  const formClassName = `subs_form ${loading ? "subs_form--loading" : ""}`;

  return (
    <form className={formClassName} onSubmit={handleSubmit}>
      <fieldset className="box">
        <legend className="label has-text-centered">
          Información de Contacto
        </legend>
        <div className="columns">
          <div className="column">{fields[0]}</div>
          <div className="column">{fields[1]}</div>
        </div>
        <div className="columns">
          <div className="column">{fields[2]}</div>
          <div className="column">
            <div className="columns">
              <div className="column">{fields[3]}</div>
              <div className="column">{fields[4]}</div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">{fields[5]}</div>
              <div className="column">{fields[6]}</div>
            </div>
          </div>
          <div className="column">{fields[7]}</div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">{fields[8]}</div>
              <div className="column">{fields[9]}</div>
            </div>
          </div>
          <div className="column">
            <div className="columns">
              <div className="column">{fields[10]}</div>
              <div className="column">{fields[11]}</div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="box">
        <legend className="label has-text-centered">Pago Arancel</legend>
        <div className="columns">
          <div className="column">{fields[12]}</div>
        </div>
        <div className="columns">
          <div className="column">{fields[13]}</div>
          <div className="column">{fields[15]}</div>
        </div>
        <div className="columns">
          <div className="column">{fields[14]}</div>
        </div>
      </fieldset>
      <fieldset className="box">
        <legend className="label has-text-centered">Ponencia</legend>
        <div className="columns">
          <div className="column">{fields[16]}</div>
        </div>
        {presenta ? (
          <React.Fragment>
            <div className="columns">
              <div className="column">{fields[17]}</div>
              <div className="column">{fields[18]}</div>
            </div>
            <div className="columns">
              <div className="column">{fields[19]}</div>
            </div>
          </React.Fragment>
        ) : null}
      </fieldset>
      <Notification {...status} />
      <div className="columns">
        <div className="column">
          <Submit id="subs_submit" loading={loading} />
        </div>
      </div>
    </form>
  );
};

export default FormLayout;
