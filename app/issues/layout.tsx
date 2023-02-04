import { PrismaClient } from '@prisma/client';

import IssuesList from '@components/issues/IssueList';
import classes from '@styles/issues.module.css';

async function IssuesLayout({ children }: {
    children: React.ReactNode
}) {
  const prisma = new PrismaClient();
  const issues = await prisma.issue.findMany();

  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        <IssuesList issues={issues} />
      </aside>
      {children}
    </div>
  );
}

export default IssuesLayout;
