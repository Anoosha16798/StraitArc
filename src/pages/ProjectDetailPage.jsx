import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetail from '../components/projects/ProjectDetail';
import projectsData from '../data/projects.json';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectsData.projects.find(p => p.id === id);

  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage;