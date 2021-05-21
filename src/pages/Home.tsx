import React from 'react';
import Button from 'react-bootstrap/Button';
import { useUser } from 'reactfire';
import { logout } from '../functions/auth';

const HomePage = () => {
  const { data: user } = useUser();
  return (
    <main>
      Ya inició sesión como {user.displayName}
      <Button onClick={logout} size="sm" variant="danger">
        Cerrar sesión
      </Button>
    </main>
  )
}

export default HomePage;
