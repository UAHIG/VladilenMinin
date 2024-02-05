import Header from "./components/header"
import TeachingSection from "./components/TeachingSection"
import TabSection from "./components/TabSection"

export default function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <TeachingSection />
        <TabSection />
      </main>
    </div>
  )
}
