import styles from '@/styles/SkillCard.module.css';
import { FaReact, FaDocker, FaPython, FaNode, FaAws, FaLinux, FaGitAlt } from 'react-icons/fa';
import {
    SiOpenai,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiSpringboot,
    SiPostgresql,
    SiSupabase,
    SiPostman,
    SiPandas,
    SiGooglegemini,
    SiAnthropic,
    SiLangchain,
    SiStreamlit,
    SiGithubactions
} from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import { IconType } from 'react-icons';

interface SkillCardProps {
    title: string;
    description: string;
    icon: string;
    techStack: string[];
}

const headerIconMap: { [key: string]: IconType } = {
    react: FaReact,
    docker: FaDocker,
    openai: SiOpenai,
    python: FaPython,
};

// Map tech names to their corresponding icons with colors
const techIconMap: { [key: string]: { icon: IconType; color: string } } = {
    'React': { icon: FaReact, color: '#61DAFB' },
    'TypeScript': { icon: SiTypescript, color: '#3178C6' },
    'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
    'HTML5': { icon: SiHtml5, color: '#E34F26' },
    'CSS3': { icon: SiCss3, color: '#1572B6' },
    'Springboot': { icon: SiSpringboot, color: '#6DB33F' },
    'Python': { icon: FaPython, color: '#3776AB' },
    'Node.js': { icon: FaNode, color: '#339933' },
    'SQL': { icon: DiDatabase, color: '#4479A1' },
    'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
    'Supabase': { icon: SiSupabase, color: '#3ECF8E' },
    'Postman': { icon: SiPostman, color: '#FF6C37' },
    'Git': { icon: FaGitAlt, color: '#F05032' },
    'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
    'Docker': { icon: FaDocker, color: '#2496ED' },
    'AWS': { icon: FaAws, color: '#FF9900' },
    'Azure': { icon: FaAws, color: '#0078D4' },
    'Linux': { icon: FaLinux, color: '#FCC624' },
    'Pandas': { icon: SiPandas, color: '#150458' },
    'OpenAI': { icon: SiOpenai, color: '#412991' },
    'Gemini': { icon: SiGooglegemini, color: '#4285F4' },
    'Claude': { icon: SiAnthropic, color: '#D97757' },
    'Groq': { icon: FaPython, color: '#F55036' },
    'LangChain': { icon: SiLangchain, color: '#1C3C3C' },
    'Langflow': { icon: SiLangchain, color: '#1C3C3C' },
    'Hugging Face': { icon: FaPython, color: '#FFD21E' },
    'Streamlit': { icon: SiStreamlit, color: '#FF4B4B' },
};

const SkillCard = ({ title, description, icon, techStack }: SkillCardProps) => {
    const IconComponent = headerIconMap[icon] || FaReact;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <IconComponent className={styles.icon} />
                <h3 className={styles.title}>{title}</h3>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.techStack}>
                <div className={styles.techTitle}>Tech stack:</div>
                <div className={styles.tags}>
                    {techStack.map((tech) => {
                        const techInfo = techIconMap[tech];
                        if (techInfo) {
                            const TechIcon = techInfo.icon;
                            return (
                                <span key={tech} className={styles.tag} title={tech}>
                                    <TechIcon
                                        className={styles.techIcon}
                                        style={{ color: techInfo.color }}
                                    />
                                    <span className={styles.techName}>{tech}</span>
                                </span>
                            );
                        }
                        return (
                            <span key={tech} className={styles.tag} title={tech}>
                                <span className={styles.techName}>{tech}</span>
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
