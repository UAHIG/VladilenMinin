import { ways } from "../../src/data.js"
import ListItem from "./ListItem" 

export default function TeachingSection() {
  return (
    <section>
    <h3>React.js: Основы и Современные Концепции</h3>
    <ul>
      {ways.map((way) => (
        <ListItem key={way.title} {...way} />
      ))}
    </ul>
  </section>
  )
}