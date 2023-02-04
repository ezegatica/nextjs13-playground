import { PrismaClient } from '@prisma/client';

import IssueDetails from '@components/issues/IssueDetails';

async function IssueDetailsPage({ params }: {params: {id: string}}) {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findFirst({ where: { id: +params.id } });

  if (!issue) {
    throw new Error('Issue not found!')
  }

  return <IssueDetails issue={issue} />;
}

export default IssueDetailsPage;
