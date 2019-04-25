import React from "react";

type SubmitButtonProps = {
  id: string;
  loading: boolean;
};

const SubmitButton = ({ id, loading }: SubmitButtonProps) => {
  const className = `
    button is-primary w-33
    ${loading ? "is-loading" : ""}
    `;

  return (
    <div className="control flx justify-center">
      <button id={id} className={className} type="submit">
        Enviar
      </button>
    </div>
  );
};

export default SubmitButton;
