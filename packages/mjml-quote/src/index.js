import { MJMLElement } from 'mjml-core'
import merge from 'lodash/merge'
import React, { Component } from 'react'

import MJMLSection from 'mjml-section'
import MJMLColumn from 'mjml-column'
import MJMLText from 'mjml-text'
import MJMLRaw from 'mjml-raw'
import MJMLImage from 'mjml-image'

const tagName = 'mj-quote'
const defaultMJMLDefinition = {
  content: '',
  attributes: {
    'align': 'left',
    'color': '#000000',
    'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
    'font-size': '13px',
    'line-height': '22px',
    'padding': '10px 25px'
  }
}
const endingTag = true
// const columnElement = true
const baseStyles = {
  div: {
    cursor: 'auto'
  }
}

@MJMLElement
class Quote extends Component {

  styles = this.getStyles()

  getStyles () {
    const { mjAttribute } = this.props

    return merge({}, baseStyles, {
      div: {
        color: mjAttribute('color'),
        fontFamily: mjAttribute('font-family'),
        fontSize: mjAttribute('font-size'),
        fontStyle: mjAttribute('font-style'),
        fontWeight: mjAttribute('font-weight'),
        lineHeight: mjAttribute('line-height'),
        textDecoration: mjAttribute('text-decoration')
      }
    })
  }

  renderQuote () {
    const { mjContent } = this.props

    return (
      <tr><td style={{paddingLeft: '25px', paddingTop: '25px'}} >
        <table border="0" cellPadding="0" cellSpacing="0" align="center" style={{margin:'0 auto', borderLeft: '2px solid #e04343'}}>
          <tbody>
            <MJMLText
              padding="25px"
              font-style="italic"
              font-size="15px"
              font-weight="normal"
            >
              {mjContent()}
            </MJMLText>
          </tbody>
        </table>
      </td></tr>
    )
  }

  render () {
    const { mjAttribute } = this.props

    return (
      <MJMLSection full-width="full-width" background-color="#f0f0f0" padding="0">
        <MJMLColumn width="62.5%">
          {this.renderQuote()}
          <MJMLText align="center" padding-bottom="25px">{mjAttribute('author')}</MJMLText>
        </MJMLColumn>
        <MJMLColumn width="37.5%">
          <MJMLImage padding="0" src={mjAttribute('image-href')} align="right" />
        </MJMLColumn>
      </MJMLSection>
    )
  }

}

Quote.tagName = tagName
Quote.defaultMJMLDefinition = defaultMJMLDefinition
Quote.endingTag = endingTag
// Quote.columnElement = columnElement
Quote.baseStyles = baseStyles

export default Quote
