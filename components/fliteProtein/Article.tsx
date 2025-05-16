import * as React from "react";
import { ArticleProps } from "./types";
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../lib/imageURL'

const components = {
  types: {
    image: ({ value }) => (
      <figure>
        <img
          src={urlFor(value).format('webp').url()}
          alt={value.caption || ""}
          loading="lazy"
        />
        {value.caption && <figcaption>{value.caption}</figcaption>}
      </figure>
    )
  }
};

export const Article: React.FC<ArticleProps> = ({
  thumb,
  tags,
  title,
  body,
}) => {
  return (
    <article className="prose prose-invert max-w-none">
      <PortableText value={body} components={components} />
    </article>
  );
};
