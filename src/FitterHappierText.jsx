
import React from 'react'
import { debounce } from 'lodash'

class FitterHappierText extends React.Component {

  constructor () {
    super ()
    this.resize = debounce(this.resize.bind(this))
    this.state = {
      width: 256,
      height: 24
    }
  }

  resize () {
    let el = this.textRef
    let state = this.state
    let width = el.offsetWidth || el.getComputedTextLength()
    let height = el.offsetHeight || 24
    if (state.width !== width || state.height !== height) {
      this.setState({
        width: width,
        height: height
      })
    }
  }

  componentDidMount () {
    this.resize()
  }

  componentWillReceiveProps () {
    this.resize()
  }

  render () {
    let styles = {
      svg: {
        width: '100%',
        maxHeight: '100%',
        fill: 'currentcolor',
        overflow: 'visible'
      },
      text: {
        fontFamily: 'inherit',
        fontSize: '1rem',
        fontWeight: 'inherit',
        textAnchor: 'middle'
      }
    }
    let viewBox = [
      0, 0,
      this.state.width,
      this.state.height
    ].join(' ')

    return (
      <svg {...this.props}
        viewBox={viewBox}
        style={styles.svg}>
        <text
          ref={(text) => { this.textRef = text }}
          x='50%'
          y={this.props.baseline}
          style={styles.text}>
          {this.props.text || this.props.children}
        </text>
      </svg>
    )
  }

}

FitterHappierText.defaultProps = {
  baseline: 16,
  paddingY: 0,
}

FitterHappierText.propTypes = {
  text: React.PropTypes.string,
  baseline: React.PropTypes.number,
  paddingY: React.PropTypes.number,
}

export default FitterHappierText

