import Button from "./Button/Button"
import { differences } from "../data"
import { useState } from "react"

export default function TabSection() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  return (
    <section>
      <h3>Чем React отличается от других</h3>
      <Button
        isActive={contentType === "way"}
        onClickfromAppJS={() => handleClick("way")}>
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClickfromAppJS={() => handleClick("easy")}>
        Доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        onClickfromAppJS={() => handleClick("program")}>
        Концентрация
      </Button>
      {contentType ? <p>{differences[contentType]}</p> : <p>Нажми на кнопку</p>}
    </section>
  )
}
