import Header from "./components/header"
import ListItem from "./components/ListItem"
import { ways, differences } from "./data"
import Button from "./components/Button/Button"
import { useState } from "react"

export default function App() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  return (
    <div className='App'>
      <Header />
      <main>
        <section>
          <h3>React.js: Основы и Современные Концепции</h3>
          <ul>
            {ways.map((way) =>  <ListItem key = {way.title} {...way} />)}
          </ul>
        </section>
        <section>
          <h3>Чем React отличается от других</h3>
          <Button isActive={contentType === "way"} onClickfromAppJS={() => handleClick("way")}>Подход</Button>
          <Button isActive={contentType === "easy"} onClickfromAppJS={() => handleClick("easy")}>
            Доступность
          </Button>
          <Button isActive={contentType === "program"} onClickfromAppJS={() => handleClick("program")}>
            Концентрация
          </Button>
          {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку</p>
          )}
        </section>
      </main>
    </div>
  )
}
