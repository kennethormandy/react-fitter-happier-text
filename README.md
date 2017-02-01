# react-fitter-happier-text

React component for fully fluid headings

*Note:* Requires `react >= 0.14.0`

## Demo

http://jxnblk.com/react-fitter-happier-text

## Usage

```bash
npm i react-fitter-happier-text
```

```js
var React = require('react')
var FitterHappierText = require('react-fitter-happier-text')

React.render(<FitterHappierText text='Hello World' />, document.querySelector('#hello-world'))
```

Note: this component relies on `element.offsetWidth` and only works in client-side contexts.

### Usage with children

```js
var React = require('react')
var FitterHappierText = require('react-fitter-happier-text')

React.render(
  <FitterHappierText>
    1<tspan opacity="0.5">st</tspan>
  </FitterHappierText>, document.querySelector('#hello-world'))
```

## Related

http://jxnblk.com/fitter-happier-text

MIT License

