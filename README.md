# Etch

> An awesome project.

## Overview

Etch is a lightweight library for building user interfaces. This documentation site is powered by [docsify](https://docsify.js.org).

## Quick Start

```bash
npm install etch
```

```js
import etch from 'etch'

const element = etch.dom('div', { class: 'hello' }, 'Hello world')
document.body.appendChild(element)
```

## Features

- Declarative component model
- Automatic DOM updates
- Tiny footprint
