import React from "react";
import { ContentBlock, InlineContent } from "@/types/contentBlock";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  content: ContentBlock[];
};

function ArticleContent({ content }: Props) {
  const renderInlineContent = (inlineContent: InlineContent) => {
    switch (inlineContent.type) {
      case "text":
        return inlineContent.text;
      case "link":
        return (
          <a
            href={inlineContent.href}
            className="text-primary hover:underline"
            target={inlineContent.inline ? "_self" : "_blank"}
            rel={inlineContent.inline ? "" : "noopener noreferrer"}
          >
            {inlineContent.text}
          </a>
        );
      default:
        return null;
    }
  };

  const renderBlock = (block: ContentBlock, index: number): React.ReactNode => {
    switch (block.type) {
      case "heading":
        const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag
            key={index}
            id={`heading-${index}`}
            className="text-foreground"
          >
            {block.text}
          </HeadingTag>
        );
      case "paragraph":
        return (
          <p key={index} className="text-foreground">
            {block.content
              ? block.content.map((inlineContent, i) => (
                  <React.Fragment key={i}>
                    {renderInlineContent(inlineContent)}
                  </React.Fragment>
                ))
              : block.text}
          </p>
        );
      case "image":
        return (
          <figure key={index}>
            <img
              src={block.src}
              alt={block.alt}
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-md"
            />
            {block.caption && (
              <figcaption className="mt-2 text-center text-sm text-foreground-muted">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      case "list":
        const ListTag = block.ordered ? "ol" : "ul";
        return (
          <ListTag key={index} className="text-foreground">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ListTag>
        );
      case "code_block":
        return (
          <div key={index} className="not-prose my-6">
            <SyntaxHighlighter
              language={block.language}
              style={atomDark}
              className="rounded-md"
            >
              {block.content}
            </SyntaxHighlighter>
          </div>
        );
      case "blockquote":
        return (
          <blockquote
            key={index}
            className="border-l-4 border-border pl-4 py-2 my-4 italic text-foreground"
          >
            {block.text}
          </blockquote>
        );
      case "task_list":
        return (
          <ul key={index} className="list-none pl-0" aria-label="Task List">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-center mb-2 text-foreground">
                <input
                  type="checkbox"
                  checked={item.checked}
                  readOnly
                  className="mr-2"
                  aria-label={
                    item.checked ? "Completed task" : "Incomplete task"
                  }
                />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        );
      default:
        console.warn(`Unsupported block type: ${(block as any).type}`);
        return null;
    }
  };

  const renderContent = () => {
    let sections: JSX.Element[] = [];
    let currentSection: React.ReactNode[] = [];
    let currentSectionId = "";

    content.forEach((block, index) => {
      if (block.type === "heading" && block.level === 2) {
        if (currentSection.length > 0) {
          sections.push(
            <section key={currentSectionId} aria-labelledby={currentSectionId}>
              {currentSection}
            </section>
          );
        }
        currentSectionId = `heading-${index}`;
        currentSection = [renderBlock(block, index)];
      } else {
        const renderedBlock = renderBlock(block, index);
        if (renderedBlock !== null) {
          currentSection.push(renderedBlock);
        }
      }
    });

    if (currentSection.length > 0) {
      sections.push(
        <section key={currentSectionId} aria-labelledby={currentSectionId}>
          {currentSection}
        </section>
      );
    }

    return sections;
  };

  return (
    <div className="prose prose-lg prose-primary mx-auto">
      {renderContent()}
    </div>
  );
}

export default ArticleContent;
