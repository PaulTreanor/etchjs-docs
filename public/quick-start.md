# Quick Start

## Installation

```bash
npm install etchjs
```

## Usage

### Vanilla JS 
```js
import "etchjs/vanilla"; 
```

```html
<div data-fill="stipple" data-fill-density="60" data-fill-color="#ff4d4d"></div>
```

### React
Wrap any element (or use `as` to change the tag) and pass the pattern as props.


```jsx
import { EtchFill } from "etchjs/react";

<EtchFill 
  type="stipple" 
  density={60} 
  color="#4dd0ff"
>
	Children
</EtchFill>
```
The pattern is generated client-side only, so it's SSR-safe.


## Next Steps

- Read the [Components](components.md) guide
- Check out the [API Reference](api.md)
