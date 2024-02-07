import { useState } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"

export default function EffectSection() {
const [modal, setModal] = useState(false)

  function openModal() {
    setModal(true)
  }


  return (
    <section>
      <h3>Effects</h3>

      <Button onClickfromAppJS={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorem minus soluta quod, nisi fugit tenetur, laudantium fuga suscipit natus optio repellat possimus laborum aspernatur deserunt vel nam excepturi harum.</p>
        <Button onClickfromAppJS={() => setModal(false)}>Close modal</Button>
      </Modal>
    </section>
  )
}