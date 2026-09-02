import { EtchFill } from "etchjs/react";

export default function StippleDemo() {
  return (
    <EtchFill
      as="div"
      type="stipple"
      density={60}
      color="#4dd0ff"
      style={{ padding: "32px", borderRadius: "12px", fontSize: "20px", fontWeight: 600 }}
    >
      Stipple
    </EtchFill>
  );
}
