import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createProject } from '../functions/projects';

const ProjectsSection = () => {

  const [inputTitle, setInputTitle] = useState('');
  const [busy, setBusy] = useState(false);

  const handleNew = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (!inputTitle) {
        throw new Error('Rellene todos los campos');
      }
      const item = await createProject({
        title: inputTitle,
        color: 'primary',
      });
      console.log(item);
      setInputTitle('');
    } catch (err) {
      alert(err.toString());
      console.error(err);
    }
    setBusy(false);
  }

  return (
    <section id="projects" className="mt-3">
      <h2>Proyectos</h2>
      <p>
        Organize sus tareas en proyectos
      </p>
      <Form onSubmit={handleNew}>
        <Form.Group className="mb-3" controlId="teamTitle">
          <Form.Label>Nuevo proyecto</Form.Label>
          <Form.Control type="text" placeholder="Nombre del proyecto" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} disabled={busy} />
        </Form.Group>
        <Button type="submit" variant="success" size="sm" disabled={busy}>
          Guardar
        </Button>
      </Form>
    </section>
  )
}

export default ProjectsSection;
