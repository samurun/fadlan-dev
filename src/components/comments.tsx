'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comments() {
  const { theme, systemTheme } = useTheme();

  return (
    <Giscus
      id='comments'
      repo='fadlan-dev/fadlan-dev'
      repoId='R_kgDOLonHLA'
      category='Announcements'
      categoryId='DIC_kwDOLonHLM4CeeIN'
      mapping='pathname'
      term='Welcome to @giscus/react component!'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme={theme === 'system' ? systemTheme : theme}
      lang='en'
      loading='lazy'
    />
  );
}
