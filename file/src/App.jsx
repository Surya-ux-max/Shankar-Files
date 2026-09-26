import './index.css'
import Hero from './hero/Hero'
import Bio from './bio/Bio'

export default function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'var(--paper)' }}>
      <Hero />
      <Bio />
    </div>
  )
}
