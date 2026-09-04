import { CodePreview } from "@stianlarsen/react-code-preview";

export default function Demo({ code, children, initialTab = "preview" }) {
	return (
		<CodePreview
			component={<div style={{ width: "100%" }}>{children}</div>}
			code={code}
			initialTab={initialTab}
		/>
	);
}
