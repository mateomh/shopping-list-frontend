import React from 'react'
import ContentSection from './ContentSection'
import t from'../utils/ApplicationText.json';
import { Content } from './ContentSection/StyledComponents';

const shopping = require('../assets/images/person-shopping.jpg');
const list = require('../assets/images/shopping-list.jpg');

const LandingContent:React.FC = ()=> {
  return (
    <Content>
      <ContentSection
        reversed={false}
        text={t.LandingText1}
        image={shopping}
      />
      <ContentSection 
        reversed={true}
        text={t.LandingText2}
        image={list}
      />
    </Content>
  )
}

export default LandingContent