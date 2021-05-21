import { apiURL } from "./api";
import { getHeaders } from "./auth";

export interface ProjectFields {
  title: string;
  color: string;
}

export interface Project extends ProjectFields {
  id: number;
}

export const createProject = async (item: ProjectFields): Promise<Project> => {
  const headers = await getHeaders();
  const url = `${apiURL}projects/`;
  const res = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(item),
    redirect: 'follow'
  });
  if (res.status !== 201) {
    console.error(res);
    throw new Error('Error al crear Proyecto');
  }
  const body: Project = await res.json();
  return body;
}
