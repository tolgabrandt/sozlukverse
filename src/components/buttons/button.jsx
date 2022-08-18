import classNames from "classnames";

export function Button({ label, handleClick, status }) {
  return (
    <button onClick={handleClick} className={classNames(status)}>
      {label}
    </button>
  );
}
