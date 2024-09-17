import React from "react";
import { ContentBlock } from "@/types/contentBlock";

type Props = {
  content: ContentBlock[];
};

function TableOfContents({ content }: Props) {
  const headings = content.filter(
    (block) => block.type === "heading" && block.level <= 3
  ) as Array<ContentBlock & { type: "heading" }>;

  if (headings.length < 3) {
    return null; // Don't show ToC for short articles
  }

  return (
    <nav aria-label="Table of Contents" className="mb-8">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ul className="list-none pl-0">
        {headings.map((heading, index) => (
          <li
            key={index}
            className={`mb-2 ${heading.level === 3 ? "ml-4" : ""}`}
          >
            <a
              href={`#heading-${index}`}
              className="text-blue-600 hover:underline"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;
