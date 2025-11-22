import SkillCard from '@/components/SkillCard';
import { skills } from '@/data/skills';
import styles from '@/styles/SkillsPage.module.css';

const SkillsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
            techStack={skill.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Skills' },
  };
}

export default SkillsPage;
