import { MJMLElement } from 'mjml-core'
import React, { Component } from 'react'

import MJMLSection from 'mjml-section'
import MJMLText from 'mjml-text'

const tagName = 'mj-hero'
const defaultMJMLDefinition = {}
const endingTag = true
const baseStyles = {}

@MJMLElement
class Hero extends Component {
  render() {
    return (
      <MJMLSection width="100px" height="100px">
        <MJMLText>'Hello'</MJMLText>
      </MJMLSection>
    )
  }
}

Hero.tagName = tagName
Hero.defaultMJMLDefinition = defaultMJMLDefinition
Hero.endingTag = endingTag
Hero.baseStyles = baseStyles

export default Hero
