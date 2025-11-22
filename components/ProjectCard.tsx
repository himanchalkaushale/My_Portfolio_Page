import Image from 'next/image';
import { VscGlobe, VscGithub } from 'react-icons/vsc';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.projectImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className={styles.placeholderImage}></div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
        </div>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.buttons}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
              onClick={(e) => e.stopPropagation()}
            >
              <VscGlobe />
              <span>Live</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
              onClick={(e) => e.stopPropagation()}
            >
              <VscGithub />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
