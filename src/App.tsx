import React from 'react';
import { AuthCheck } from 'reactfire';

import LoginPage from './pages/Login';
import AccountSection from './pages/Account';
import TokensSection from './pages/Tokens';

const App = () => {
  return (
    <div className="container-fluid pt-3 pb-3">
      <header>
        <h1>Djangofire v0.1.2</h1>
        <p>
          PWA de ejemplo de integración de Firebase con Django REST Framework. Creado por <a target="_blank" rel="noopener noreferrer" href="https://angelxehg.github.io">Angel Hurtado</a>
        </p>
      </header>
      <AuthCheck fallback={<LoginPage />}>
        <TokensSection />
        <AccountSection />
      </AuthCheck>
    </div>
  );
}

export default App;
