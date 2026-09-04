import { useState } from "react";
import { EtchFill } from "etchjs/react";
import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";

export default function StipplePlayground() {
	const [density, setDensity] = useState(60);
	const [color, setColor] = useState("#4dd0ff");

	const code = `import { EtchFill } from "etchjs/react";

<EtchFill
  type="stipple"
  density={${density}}
  color="${color}"
>
  Your content
</EtchFill>`;

	const highlighted = Prism.highlight(code, Prism.languages.jsx, "jsx");

	return (
		<div>
			<div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
				<label style={{ display: "grid", gap: "8px", fontSize: "14px" }}>
					<span>
						Colour <code>{color}</code>
					</span>
					<input
						type="color"
						value={color}
						onChange={(event) => setColor(event.target.value)}
						style={{ width: "72px", height: "36px", padding: "0", border: "none", cursor: "pointer" }}
					/>
				</label>
				<label style={{ display: "grid", gap: "8px", fontSize: "14px", flex: "1 1 180px" }}>
					<span>
						Density <code>{density}</code>
					</span>
					<input
						type="range"
						min="1"
						max="100"
						step="1"
						value={density}
						onChange={(event) => setDensity(Number(event.target.value))}
					/>
				</label>
			</div>

			<EtchFill
				as="div"
				type="stipple"
				density={density}
				color={color}
				style={{
					marginTop: "20px",
					padding: "48px",
					borderRadius: "12px",
					textAlign: "center",
					fontSize: "18px",
					fontWeight: 600,
				}}
			>
				Stipple preview
			</EtchFill>

			<pre data-lang="jsx" className="language-jsx" style={{ marginTop: "20px" }}>
				<code
					className="lang-jsx language-jsx"
					dangerouslySetInnerHTML={{ __html: highlighted }}
				/>
			</pre>
		</div>
	);
}
