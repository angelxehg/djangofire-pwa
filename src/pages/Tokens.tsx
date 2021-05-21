import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { setTimeout } from 'timers';

import { getJWT } from '../functions/auth';

const TokensSection = () => {

  const [status, setStatus] = useState<string>();

  const tokenToClipboard = async () => {
    setStatus('Copiando...');
    const token = await getJWT();
    const clipboardResult = await navigator.permissions.query({ name: "clipboard-write" });
    if (clipboardResult.state === "granted" || clipboardResult.state === "prompt") {
      navigator.clipboard.writeText(token);
      setStatus('Copiado a Portapapeles!');
    } else {
      setStatus('No se pudo copiar!');
    }
    setTimeout(() => setStatus(undefined), 1000);
  }

  return (
    <section id="tokens">
      <h2>Tokens</h2>
      <Button onClick={tokenToClipboard} size="sm" variant="warning" disabled={status !== undefined}>
        {status || 'Copiar a portapapeles'}
      </Button>
    </section>
  )
}

export default TokensSection;
