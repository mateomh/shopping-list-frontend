import React from 'react'
import { ContentCard, ContentCardImage, ContentCardText } from './ContentSection/StyledComponents'

interface ContentSectionProps {
  reversed: boolean;
  text: string;
  image: string;
}

const ContentSection:React.FC<ContentSectionProps> = ({ 
  reversed,
  text,
  image, 
}) => {
  return (
    <ContentCard reversed={reversed}>
        <ContentCardImage src={image} />
        <ContentCardText>
          {text}
        </ContentCardText>
    </ContentCard>
  )
}

export default ContentSection