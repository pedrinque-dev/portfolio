import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { Container } from '@/components/layout/Container';

export function ProjectDetail() {
  const { t } = useTranslation();

  return (
    <Container className="py-28">
      <Link to="/#projects" className="font-mono text-sm text-brand">
        {t('projects.backToProjects')}
      </Link>
    </Container>
  );
}

export default ProjectDetail;
