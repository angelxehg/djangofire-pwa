import React from 'react';
import { AuthCheck } from 'reactfire';

import LoginPage from './pages/Login';
import AccountSection from './pages/Account';

const App = () => {
  return (
    <div className="container-fluid pt-3 pb-3">
      <header>
        <h1>Djangofire v0.1.1</h1>
        <p>
          Hola mundo! Creado por <a target="_blank" rel="noopener noreferrer" href="https://angelxehg.github.io">Angel Hurtado</a>
        </p>
      </header>
      <AuthCheck fallback={<LoginPage />}>
        <AccountSection />
      </AuthCheck>
    </div>
  );
}

export default App;
