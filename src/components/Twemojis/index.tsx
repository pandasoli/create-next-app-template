import { useEffect, useState } from 'react'

import Codes from './emojis.json'
import Container from './index.styles'


type CodesType = { [label: string]: string }
type EmojisType = { name: string, alt: string }

type Props = {
  emojis?: string
}

const Twemoji = (props: Props) => {
  const [ Emojis, SetEmojis ] = useState<EmojisType[]>([])

  useEffect(() => {
    const newEmojis = []
    props.emojis?.split(' ').forEach($ => {
      if ($.startsWith(':') && $.endsWith(':')) {
        const codeKey = $.substring(1, $.length - 1)

        if (Object.keys(Codes as CodesType).includes(codeKey))
          newEmojis.push({ name: (Codes as CodesType)[codeKey], alt: $ })
        else
          newEmojis.push({ name: Codes['apple'], alt: ':apple:' })
      }
      else
        newEmojis.push({ name: $, alt: $ })
    })

    SetEmojis(newEmojis)
  }, [])

  return <>
    {
      Emojis.map(($, _) =>
        <Container
          key={ _ }
          src={ `/twemojis/${$.name}.svg` }
          alt={ $.alt }
        />
      )
    }
  </>
}


export default Twemoji