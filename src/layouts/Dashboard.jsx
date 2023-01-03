import React from 'react'
import { Button, Label, Icon } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'

export default function Dashboard() {
  return (
    <div>
      <Navi/>
      <Categories/>
      <ProductList/>
      <Button as='div' labelPosition='right'>
        <Button icon>
            <Icon name='heart' />
            Like
        </Button>
        <Label as='a' basic pointing='left'>
            2,048
        </Label>
        </Button>
        <Button as='div' labelPosition='left'>
        <Label as='a' basic pointing='right'>
            2,048
        </Label>
        <Button icon>
            <Icon name='heart' />
            Like
        </Button>
        </Button>
        <Button as='div' labelPosition='left'>
        <Label as='a' basic>
            2,048
        </Label>
        <Button icon>
            <Icon name='fork' />
        </Button>
      </Button>
    </div>
  )
}
