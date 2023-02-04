'use client';

function IssueErrorPage({error}: {error: {message: string}}) {
  return <p>{error.message}</p>
}

export default IssueErrorPage;