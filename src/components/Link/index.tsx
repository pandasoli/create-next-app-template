import NextLink from 'next/link'
import Container from './index.styles'

type Props = {
  text: string
  link: string
  preLoad?: boolean
}


const Link = (props: Props) => {
  return (
    props.preLoad ?
      <NextLink href={ props.link }>
        <Container>{ props.text }</Container>
      </NextLink>
      :
      <Container href={ props.link }>{ props.text }</Container>
  )
}


export default Link