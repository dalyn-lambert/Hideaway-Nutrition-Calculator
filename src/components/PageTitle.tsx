'use client';

import { PageTitleProps } from '@/lib/types';

const PageTitle = ({ title }: PageTitleProps) => {
  return <div className='text-lg'>{title}</div>;
};

export default PageTitle;
