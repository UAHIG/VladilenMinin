import Header from "./components/header"
import ListItem from "./components/ListItem"
import { ways } from "./data"
import Button from "./components/Button"

export default function App() {
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
          <Button />
        </section>
      </main>
    </div>
  )
}
