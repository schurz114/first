import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AssessmentForm from '../screens/AssessmentForm';

storiesOf('AssessmentForm', module)
  .add('default', () => <AssessmentForm />)
  .add('with pre-filled data', () => (
    <AssessmentForm 
      route={{ 
        params: { 
          targetCountry: '美国',
          autoRecommend: false 
        } 
      }} 
    />
  )); 