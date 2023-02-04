import classes from '@styles/IssueDetailsLoading.module.css';

function IssuesLoading() {
  return (
    <article className={classes.details}>
      <header>
        <h1 className={classes.title}>{' '}</h1>
        <p className={classes.summary}>{' '}</p>
      </header>
      <p className={classes.description}>{' '}</p>
    </article>
  );
}
  
  export default IssuesLoading;