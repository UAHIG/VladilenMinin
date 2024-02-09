import { useState, useEffect, useCallback } from "react"
import Button from "../Button/Button"
import Modal from "../Modal/Modal"
import useInput from "../hooks/useInput"

export default function ImagesSection() {
  const input = useInput()
  const [modal, setModal] = useState(false)
  const [laoading, setLoading] = useState(false)
  const [photos, setUsers] = useState([])

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    const photos = await response.json()
    setUsers(photos)
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
        <h3>Это пока не функциональный модал</h3>
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
          <h3>Фильтр фото</h3>
          <input type='text' className='control' {...input} />
          <h4>Список</h4>

          <ul>
            {photos
              .filter((photos) =>
                photos.title.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((photos) => (
                <li key={photos.id}>
                  <img src={photos.thumbnailUrl} alt={photos.title} />
                  <p>{photos.title}</p>
                </li>
              ))}
          </ul>
        </>
      )}
    </section>
  )
}
