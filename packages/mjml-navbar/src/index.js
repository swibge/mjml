import { MJMLElement } from 'mjml-core'
import { widthParser } from 'mjml-core/lib/helpers'
import merge from 'lodash/merge'
import MJMLSection from 'mjml-section'
import React, { Component } from 'react'

const tagName = 'mj-navbar'
const defaultMJMLDefinition = {
  attributes: {
    'padding': '10px 25px',
    'width': '100%',
    'border-top': '5px solid #42adea',
    'border-bottom': '5px solid #42adea'
  }
}
const endingTag = true
const baseStyles = {
  bar: {}
}
const postRender = $ => {
  return $
}

@MJMLElement
class Navbar extends Component {

  styles = this.getStyles()

  getStyles () {
    const { mjAttribute } = this.props

    return merge({}, baseStyles, {
      bar: {
        width: mjAttribute('width'),
        borderTop: mjAttribute('border-top'),
        borderBottom: mjAttribute('border-bottom')
      }
    })
  }

  render () {
    const { mjContent } = this.props

    return (
      <MJMLSection
        {...this.props}
        full-width="full-width">
        <div dangerouslySetInnerHTML={{ __html: mjContent() }} />
      </MJMLSection>
    )
  }

}

Navbar.tagName = tagName
Navbar.defaultMJMLDefinition = defaultMJMLDefinition
Navbar.endingTag = endingTag
Navbar.baseStyles = baseStyles
Navbar.postRender = postRender

export default Navbar
