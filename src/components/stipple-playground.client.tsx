'use client'

import { useState } from 'react'
import { EtchFill } from 'etchjs/react'
import Prism from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'

export function StipplePlayground() {
  const [density, setDensity] = useState(60)
  const [color, setColor] = useState('#4dd0ff')

  const code = [
    'import { EtchFill } from "etchjs/react"',
    '',
    '<EtchFill',
    '  type="stipple"',
    `  density={${density}}`,
    `  color="${color}"`,
    '>',
    '  Your content',
    '</EtchFill>',
  ].join('\n')

  const highlighted = Prism.highlight(code, Prism.languages.jsx, 'jsx')

  return (
    <div className="vocs:mt-4 vocs:space-y-4">
      <div className="vocs:flex vocs:flex-wrap vocs:gap-6">
        <label className="vocs:flex vocs:flex-col vocs:gap-2 vocs:text-sm">
          <span className="vocs:text-secondary">
            Colour <code>{color}</code>
          </span>
          <input
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            style={{
              width: '72px',
              height: '36px',
              padding: '0',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          />
        </label>
        <label className="vocs:flex vocs:flex-col vocs:gap-2 vocs:text-sm vocs:flex-1 vocs:min-w-[180px]">
          <span className="vocs:text-secondary">
            Density <code>{density}</code>
          </span>
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            value={density}
            onChange={(event) => setDensity(Number(event.target.value))}
            style={{ accentColor: 'var(--vocs-color-accent)' }}
          />
        </label>
      </div>

      <EtchFill
        as="div"
        type="stipple"
        density={density}
        color={color}
        style={{
          padding: '48px',
          borderRadius: '12px',
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: 600,
        }}
      >
        Stipple preview
      </EtchFill>

      <pre data-lang="jsx" className="etch-code language-jsx">
        <code
          className="lang-jsx language-jsx"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </div>
  )
}