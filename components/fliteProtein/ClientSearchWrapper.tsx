'use client';

import SearchField from './SearchField';
import KnowledgeWrapper from './KnowledgeWrapper';

interface Props {
  tags: string[];
  tagList: string[];
}

export default function ClientSearchWrapper({ tags, tagList }: Props) {
  return (
    <>
      <SearchField onSearch={(query) => console.log('Search:', query)} />
      <KnowledgeWrapper tags={tags} tagList={tagList} />
    </>
  );
}
