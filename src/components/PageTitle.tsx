'use client';

import { PageTitleProps } from '@/lib/types';

const PageTitle = ({ title }: PageTitleProps) => {
  return <div className='text-xl font-bold uppercase'>{title}</div>;
};

export default PageTitle;
