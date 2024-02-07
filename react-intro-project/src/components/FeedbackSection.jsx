import { useState } from "react"
import Button from "./Button/Button"

export default function FeedbackSection() {
  const [name, setName] = useState("")
  const [hasError, setHasError] = useState(false)
  const [reason, setReason] = useState("help")

  function handleNameChange(event) {
    setName(event.target.value)
    setHasError(event.target.value.trim().length === 0)
  }

  function handleReasonChange(event) {
    setReason(event.target.value)
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor='name'>Ваше имя</label>
        <input
          type='text'
          className='control'
          value={name}
          style={{
            border: hasError ? '1px solid red' : null
          }}
          onChange={handleNameChange}
        />

        <select
          id='reason'
          className='control'
          value={reason}
          onChange={handleReasonChange}>
          <option value='error'>Ошибка</option>
          <option value='help'>Нужна помощь</option>
          <option value='suggest'>Предложение</option>
        </select>

        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>

        <Button disabled={hasError} isActive={!hasError}>Отправить</Button>
      </form>
    </section>
  )
}
