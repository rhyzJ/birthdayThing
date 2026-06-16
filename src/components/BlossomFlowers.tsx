import { useEffect, useState, type CSSProperties } from 'react'
import './BlossomFlowers.scss'

/** Helper for the `--d` custom property used by the grow animations. */
const d = (val: string): CSSProperties => ({ ['--d' as string]: val } as CSSProperties)

const LIGHTS = [1, 2, 3, 4, 5, 6, 7, 8]
const GRASS_LEAVES = [1, 2, 3, 4, 5, 6, 7, 8]

function FlowerHead({ variant, lineLeaves }: { variant: 1 | 2 | 3; lineLeaves: number }) {
  return (
    <div className={`flower flower--${variant}`}>
      <div className={`flower__leafs flower__leafs--${variant}`}>
        <div className="flower__leaf flower__leaf--1" />
        <div className="flower__leaf flower__leaf--2" />
        <div className="flower__leaf flower__leaf--3" />
        <div className="flower__leaf flower__leaf--4" />
        <div className="flower__white-circle" />
        {LIGHTS.map((n) => (
          <div key={n} className={`flower__light flower__light--${n}`} />
        ))}
      </div>
      <div className="flower__line">
        {Array.from({ length: lineLeaves }).map((_, i) => (
          <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

function Grass({ variant }: { variant: 1 | 2 }) {
  return (
    <div className="growing-grass">
      <div className={`flower__grass flower__grass--${variant}`}>
        <div className="flower__grass--top" />
        <div className="flower__grass--bottom" />
        {GRASS_LEAVES.map((n) => (
          <div key={n} className={`flower__grass__leaf flower__grass__leaf--${n}`} />
        ))}
        <div className="flower__grass__overlay" />
      </div>
    </div>
  )
}

function LongG({ variant, delays }: { variant: number; delays: string[] }) {
  return (
    <div className={`long-g long-g--${variant}`}>
      {delays.map((delay, i) => (
        <div key={i} className="grow-ans" style={d(delay)}>
          <div className={`leaf leaf--${i}`} />
        </div>
      ))}
    </div>
  )
}

export default function BlossomFlowers() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`flowers-scene ${loaded ? '' : 'not-loaded'}`}>
      <div className="night" />
      <div className="flowers">
        <FlowerHead variant={1} lineLeaves={6} />
        <FlowerHead variant={2} lineLeaves={4} />
        <FlowerHead variant={3} lineLeaves={4} />

        <div className="grow-ans" style={d('1.2s')}>
          <div className="flower__g-long">
            <div className="flower__g-long__top" />
            <div className="flower__g-long__bottom" />
          </div>
        </div>

        <Grass variant={1} />
        <Grass variant={2} />

        <div className="grow-ans" style={d('2.4s')}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf" />
          </div>
        </div>

        <div className="grow-ans" style={d('2.8s')}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf" />
          </div>
        </div>

        <div className="grow-ans" style={d('2.8s')}>
          <div className="flower__g-front">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div
                key={n}
                className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${n}`}
              >
                <div className="flower__g-front__leaf" />
              </div>
            ))}
            <div className="flower__g-front__line" />
          </div>
        </div>

        <div className="grow-ans" style={d('3.2s')}>
          <div className="flower__g-fr">
            <div className="leaf" />
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className={`flower__g-fr__leaf flower__g-fr__leaf--${n}`} />
            ))}
          </div>
        </div>

        <LongG variant={0} delays={['3s', '2.2s', '3.4s', '3.6s']} />
        <LongG variant={1} delays={['3.6s', '3.8s', '4s', '4.2s']} />
        <LongG variant={2} delays={['4s', '4.2s', '4.4s', '4.6s']} />
        <LongG variant={3} delays={['4s', '4.2s', '3s', '3.6s']} />
        <LongG variant={4} delays={['4s', '4.2s', '3s', '3.6s']} />
        <LongG variant={5} delays={['4s', '4.2s', '3s', '3.6s']} />
        <LongG variant={6} delays={['4.2s', '4.4s', '4.6s', '4.8s']} />
        <LongG variant={7} delays={['3s', '3.2s', '3.5s', '3.6s']} />
      </div>
    </div>
  )
}
