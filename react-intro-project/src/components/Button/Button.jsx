import classes from "./Button.module.css"

export default function Button({ children, onClickfromAppJS, isActive }) {
  return (
    <button
      className={isActive ? `${classes.button} ${classes.active}` : classes.button}
      onClick={onClickfromAppJS}>
      {children}
    </button>
  )
}
