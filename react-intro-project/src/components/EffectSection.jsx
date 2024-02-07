import { useState, useEffect, useCallback } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import ListItem from "./ListItem"
import useInput from "./hooks/useInput"

export default function EffectSection() {
  const input = useInput()
  const [modal, setModal] = useState(false)
  const [laoading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <section>
      <h3>Effects</h3>

      <Button onClickfromAppJS={() => setModal(true)}>
        Открыть информацию
      </Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          dolorem minus soluta quod, nisi fugit tenetur, laudantium fuga
          suscipit natus optio repellat possimus laborum aspernatur deserunt vel
          nam excepturi harum.
        </p>
        <Button onClickfromAppJS={() => setModal(false)}>Close modal</Button>
      </Modal>

      {laoading && <p>Loading...</p>}
      {!laoading && (
        <>
          <h3>Фильтр имен</h3>
          <input type='text' className='control' {...input} />
          <h4>Список</h4>

          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  )
}
