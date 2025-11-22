import Image from 'next/image';
import { VscRepo } from 'react-icons/vsc';
import styles from '@/styles/GithubPage.module.css';
import { User } from '@/types';

interface GithubPageProps {
  user: User;
}

const GithubPage = ({ user }: GithubPageProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>GitHub</h1>
        <p className={styles.pageSubtitle}>
          Check out my projects and contributions on GitHub.
        </p>
      </div>

      <div className={styles.githubPage}>
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={100}
              height={100}
              priority
            />
            <div className={styles.userInfo}>
              <h2 className={styles.username}>{user.login}</h2>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <VscRepo className={styles.statIcon} />
                  <span>{user.public_repos} repositories</span>
                </div>

              </div>
            </div>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  console.log('Username:', process.env.NEXT_PUBLIC_GITHUB_USERNAME);
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
  );
  const user = await userRes.json();
  console.log('User data:', user);

  return {
    props: { title: 'GitHub', user },
    revalidate: 600,
  };
}

export default GithubPage;
