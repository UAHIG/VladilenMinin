import "../Button/Button.css"

export default function Button({ children, onClickfromAppJS, isActive }) {
  return (
    <button
      className={isActive ? "button active" : "button"}
      onClick={onClickfromAppJS}>
      {children}
    </button>
  )
}
