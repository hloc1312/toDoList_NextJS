import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostIDPageProps {
}

export default function PostIDPage (props: PostIDPageProps) {
    const router = useRouter();
    console.log(router.query.postID)
  return (
    <div>
        <h1>Post ID</h1>
        <p>Post ID: {JSON.stringify(router.query)}</p>
    </div>
  );
}
