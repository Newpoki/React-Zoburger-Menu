# React Zoburger

Based on [Jonathan Suh css hamburgers](https://jonsuh.com/hamburgers/), this is a basic React component that render an Hamburger button with sweet animations.

## Demo

[Click here to test library.]('https://newpoki.github.io/newpoki/#/outils/calculer-consommation-carburant')

## Installation

### Npm

`npm i --save react-zoburger`

### Yarn

`yarn add react-zoburger`

## Usage

```tsx
<Zoburger
  animation="vortex-r"
  isActive={isActive}
  onClick={handleZoburgerClick}
  color="teal"
/>
```

## Animation List

As this is based on [Jonathan Suh css hamburgers](https://jonsuh.com/hamburgers/), the animations' name are the same, here is the list:

- 3dx
- 3dx-r
- 3dy
- 3dy-r
- 3dxy
- 3dxy-r
- arrow
- arrow-r
- arrowalt
- arrowalt-r
- arrowturn
- arrowturn-r
- boring
- collapse
- collapse-r
- elastic
- elastic-r
- emphatic
- emphatic-r
- minus
- slider
- slider-r
- spin
- spin-r
- spring
- spring-r
- stand
- stand-r
- squeeze
- vortex
- vortex-r

## Props

| Props       | Type       | Required | Default           | Description                                                               |
| ----------- | ---------- | -------- | ----------------- | ------------------------------------------------------------------------- |
| activeColor | `string`   | `false`  | `Same as color`   | The hamburger's color when `isActive is true`                             |
| animation   | `string`   | `true`   | `∅`               | The animation mode                                                        |
| className   | `string`   | `false`  | `an empty string` | An optional className that will go on every component's child             |
| color       | `string`   | `false`  | `#000`            | The hamburger's color                                                     |
| isActive    | `boolean`  | `true`   | `#000`            | Determine hamburger's state                                               |
| label       | `string`   | `false`  | `∅`               | Text displayed next to the hamburger                                      |
| onClick     | `function` | `true`   | `∅`               | Triggered function when hamburger is clicked                              |
| ...others   | `any`      | `false`  | `∅`               | All the props that an HTML Button can receive (such as id, role, etc ...) |

## Styling

This component is really easy to customize. You can use `css` or [styled-components](https://styled-components.com) if you prefer.

### Css

All elements in component have className (+ the one that you can add) which you can target:

- Button Element &rarr; `zoburger__button`
- Box (the hamburger wrapper) &rarr; `zoburger__box`
- Inner ( the bars) &rarr; `zoburger__inner`

### Styled components

If you prefer use `styled components`, you can import the styled components in order to customize them:

```jsx
import { StyledInner } from 'react-zoburger';
import styled from 'styled-components;

const Wrapper = styled.div`
  ${StyledInner} {
    height: 10px;

    &::before, &::after {
      height: 10px;
    }
  }
`
```

## Accessibility

As suggest by [Jonathan Suh](https://jonsuh.com/), i'm using ARIA to make this component more accessible for disabled people with these attributes:

- `aria-label="Menu"`
- `aria-controls="navigation"`
- `aria-expanded={isActive}`
- `type="button"`

## Browser Support

Most animations are made with CSS3 `transforms` property, so it's supported by most browsers BUT IE9, olders, and Opera Mini. [More informations.]('https://caniuse.com/#search=translate3d')
