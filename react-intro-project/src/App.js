import Header from "./components/header"
import ListItem from "./components/ListItem"
import { ways, differences } from "./data"
import Button from "./components/Button/Button"
import { useState } from "react"

export default function App() {
  const [content, setContent] = useState("Нажми на кнопку")

  function handleClick(type) {
    setContent(type)
  }

  return (
    <div className='App'>
      <Header />
      <main>
        <section>
          <h3>React.js: Основы и Современные Концепции</h3>
          <ul>
            <ListItem {...ways[0]} />
            <ListItem {...ways[1]} />
            <ListItem {...ways[2]} />
            <ListItem {...ways[3]} />
            <ListItem {...ways[4]} />
            <ListItem {...ways[5]} />
            <ListItem {...ways[6]} />
          </ul>
        </section>
        <section>
          <h3>Чем React отличается от других</h3>
          <Button onClickfromAppJS={() => handleClick("way")}>Подход</Button>
          <Button onClickfromAppJS={() => handleClick("easy")}>
            Доступность
          </Button>
          <Button onClickfromAppJS={() => handleClick("program")}>
            Концентрация
          </Button>

          <p>{differences[content]}</p>
        </section>
      </main>
    </div>
  )
}
