import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Hello from AWS Amplify</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
