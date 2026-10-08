import './index.css'
import Hero from './hero/Hero'
import Bio from './bio/Bio'
import Skills from './skills/Skills'
import Education from './education/Education'
import Internships from './internships/Internships'
import Contributions from './contributions/Contributions'
import WelcomeSplash from './hero/WelcomeSplash'

export default function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'var(--paper, #faf8f5)' }}>
      <WelcomeSplash />
      <Hero />
      <Bio />
      <Skills />
      <Education />
      <Internships />
      <Contributions />
    </div>
  )
}