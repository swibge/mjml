import { MJMLElement } from 'mjml-core'
import React, { Component } from 'react'
import merge from 'lodash/merge'

const tagName = 'mj-hero-content'
const defaultMJMLDefinition = {
  attributes: {
    'width': '100%',
    'padding': '0px',
    'align': 'center',
    'background-color': 'transparent'
  }
}
const endingTag = false

const baseStyles = {
  div: {
    float: 'center',
    margin: '0px'
  },
  table: {
    width: '100%',
    margin: '0px'
  }
}

const postRender = $ => {
  let stylesText = ''

  $('.mj-hero-content').each(function () {
    const width = $(this).css('width')
    const align = $(this).data('align')
    const backgroundColor = $(this).data('background-color')

    $(this).before(`<!--[if mso]>
      <table border="0" cellpadding="0" cellspacing="0" align="${align}" width="${width.replace('px', '')}" style="width:${width};"><tr><td style="padding:0;background-color:${backgroundColor};">
      <![endif]-->`)
    .after(`<!--[if mso]>
      </table>
      <![endif]-->`)
    .removeAttr('data-background-color')
    .removeAttr('data-align')
  })

  $('head style').each(function () {
    stylesText += $(this).text()
  })

  if (stylesText.search('.mj-hero-content') === -1) {
    $('head').append(`<style type="text/css">
      @media only screen and (max-width:480px) {
        .mj-hero-content {
          width: 100% !important;
        }
      }
    </style>`)
  }

  return $
}

@MJMLElement
class HeroContent extends Component {
  styles = this.getStyles()

  getStyles() {
    const { mjAttribute, defaultUnit, getPadding } = this.props

    return merge({}, baseStyles, {
      div: {
        float: mjAttribute('align'),
        width: defaultUnit(mjAttribute('width'), 'px'),
        backgroundColor: mjAttribute('background-color')
      },
      td: {
        paddingTop: getPadding('top'),
        paddingLeft: getPadding('left'),
        paddingRight: getPadding('right'),
        paddingBottom: getPadding('bottom')
      }
    })
  }

  render() {
    const { mjAttribute, children } = this.props

    return (
      <div
        className="mj-hero-content"
        data-align={mjAttribute('align')}
        data-background-color={mjAttribute('background-color')}
        style={this.styles.div}>
        <table
          border="0"
          cellPadding="0"
          cellSpacing="0"
          style={this.styles.table}
          >
          <tbody>
            <tr>
              <td style={this.styles.td}>
                <table style={this.styles.table}>
                  <tbody>
                    {children}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

HeroContent.tagName = tagName
HeroContent.defaultMJMLDefinition = defaultMJMLDefinition
HeroContent.endingTag = endingTag
HeroContent.baseStyles = baseStyles
HeroContent.postRender = postRender

export default HeroContent
