import classes from "./Button.module.css"

export default function Button({ children, isActive, onClickfromAppJS, ...props }) {
  return (
    <button
      className={isActive ? `${classes.button} ${classes.active}` : classes.button}
      {...props}
      onClick={onClickfromAppJS}>
      {children}
    </button> 
  )
}
