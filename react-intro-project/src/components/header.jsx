import logo from "../images/logo-name.svg"
import { useState } from "react"

export default function Header() {
  const [now, setNow] = useState(new Date())
  setInterval(() => setNow(new Date()), 1000)
  return (
    <header>
      <img src={logo} alt='Result' />
      <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
  )
}
