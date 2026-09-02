import { useState } from "react";
import { EtchFill } from "etchjs/react";

export default function InteractiveDemo() {
  const [density, setDensity] = useState(50);

  return (
    <div>
      <label style={{ display: "grid", gap: "8px", margin: "12px 0", fontSize: "14px" }}>
        <span>Density: {density}</span>
        <input
          type="range"
          min="5"
          max="90"
          value={density}
          onChange={(event) => setDensity(Number(event.target.value))}
        />
      </label>
      <EtchFill
        as="div"
        type="stipple"
        density={density}
        color="#ffca28"
        style={{ padding: "24px", borderRadius: "12px", textAlign: "center" }}
      >
        Live preview
      </EtchFill>
    </div>
  );
}
