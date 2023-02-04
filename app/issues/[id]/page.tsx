import { PrismaClient } from '@prisma/client';

import IssueDetails from '@components/issues/IssueDetails';

async function IssueDetailsPage({ params }: {params: {id: string}}) {
  const prisma = new PrismaClient();
  await wait(1);
  const issue = await prisma.issue.findUniqueOrThrow({ where: { id: +params.id } }).catch(() => {throw new Error('Issue not found!')});

  return <IssueDetails issue={issue} />;
}

export default IssueDetailsPage;


function wait(seconds: number) {
  return new Promise<void>((resolve, reject) =>
    setTimeout(() => resolve(), seconds * 1000)
  );
}