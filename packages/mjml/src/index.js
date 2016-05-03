import { registerMJElement } from 'mjml-core'
import Container from 'mjml-container'
import Button from 'mjml-button'
import Column from 'mjml-column'
import Divider from 'mjml-divider'
import Html from 'mjml-html'
import Image from 'mjml-image'
import InvoiceItem from 'mjml-invoice-item'
import Invoice from 'mjml-invoice'
import List from 'mjml-list'
import Location from 'mjml-location'
import Raw from 'mjml-raw'
import Section from 'mjml-section'
import Social from 'mjml-social'
import Table from 'mjml-table'
import Text from 'mjml-text'
import Hero from 'mjml-hero'
import HeroContent from 'mjml-hero-content'

[ Container,
  Button,
  Column,
  Divider,
  Html,
  Image,
  InvoiceItem,
  Invoice,
  List,
  Location,
  Raw,
  Section,
  Social,
  Table,
  Text,
  Hero,
  HeroContent ].map((element) => registerMJElement(element))

export * from 'mjml-core'
