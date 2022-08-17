import { useRouter } from 'next/router';
import * as React from 'react';

export interface IParamPageProps {
}

export default function ParamPage (props: IParamPageProps) {
    const route = useRouter();
  return (
    <div>
      Param Page
      <p>
        Router: {JSON.stringify(route.query)}
      </p>
    </div>
  );
}
