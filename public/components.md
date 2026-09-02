# Components

Components are the building blocks of an Etch app.

```js
import etch from 'etch'

class Counter {
  constructor() {
    this.count = 0
  }

  render() {
    return etch.dom(
      'button',
      { onclick: () => this.count++ },
      `Clicked ${this.count} times`
    )
  }
}

const counter = new Counter()
document.body.appendChild(counter.render())
```
