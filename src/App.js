import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Hello from AWS Amplify</h1>
      <h2>Albert created the first amplify project</h2>
      <p>It was not that bad. Just need to remember the steps</p>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
