import { Issue } from '@prisma/client';
import Link from 'next/link';

function IssuesList({ issues }: { issues: Issue[] }) {
  return (
    <ul>
      {issues.map((issue) => (
        <li key={issue.id}>
          <article>
            <h2>{issue.title}</h2>
            <p>{issue.summary}</p>
            <p>
              <Link href={`/issues/${issue.id}`}>View Details</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default IssuesList;
