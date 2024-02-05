import "../Button/Button.css"

export default function Button({ children, onClickfromAppJS }) {

  return (
    <button className='button active' onClick={onClickfromAppJS}>
      {children}
    </button>
  )
}
