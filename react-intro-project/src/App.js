import Header from "./components/Header/header"
import TeachingSection from "./components/TeachingSection"
import ButtonSection from "./components/ButtonSection"
import IntroSection from "./components/IntroSection"
import TabContainer from "./components/TabContainer"
import FeedbackSection from "./components/FeedbackSection"
import { useState } from "react"

export default function App() {
  const [tab, setTab] = useState("main")

  return (
    <div>
      <Header />
      <main>
        <IntroSection />
        <TabContainer active={tab} onChange={(current) => setTab(current)} />
        {tab === "main" && (
          <>
            <TeachingSection />
            <ButtonSection />
          </>
        )}

        {tab === "feedback" && (
          <>
            <FeedbackSection />
          </>
        )}
      </main>
    </div>
  )
}
