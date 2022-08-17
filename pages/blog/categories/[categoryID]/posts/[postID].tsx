import { useRouter } from 'next/router';
import * as React from 'react';

export interface IPostDetailPageAnimalProps {
}

export default function PostDetailPageAnimal (props: IPostDetailPageAnimalProps) {
    const route = useRouter();
  return (
    <div>
      Post Detail Page Animal
      <br />
      Router: {JSON.stringify(route.query)}
    </div>
  );
}
