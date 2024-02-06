import Button from "./Button/Button"

export default function TabContainer({ active, onChange }) {
  function reas() {
    console.log('fuck')
  }
  return (


    <section style={{ marginBottom: "1rem" }}>
      <Button 
      isActive={active === "main"} 
      onClickfromAppJS={() => onChange("main")}>
        Главная
      </Button>

      <Button
        isActive={active === "feedback"}
        onClickfromAppJS={() => onChange("feedback")}>
        Обратная связь
      </Button>
    </section>
  )
}
