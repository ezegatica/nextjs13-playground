import { Issue } from '@prisma/client';
import classes from '@styles/IssueDetails.module.css';

function IssueDetails({ issue }: { issue: Issue }) {
  return (
    <article className={classes.details}>
      <header>
        <h1>{issue.title}</h1>
        <p>{issue.summary}</p>
      </header>
      <p>{issue.description}</p>
    </article>
  );
}

export default IssueDetails;
