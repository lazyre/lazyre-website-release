export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ImageBlock
  | ListBlock
  | CodeBlock
  | BlockquoteBlock
  | TaskListBlock;

interface BaseBlock {
  type: string;
}

export interface HeadingBlock extends BaseBlock {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

export interface ParagraphBlock extends BaseBlock {
  type: "paragraph";
  content?: InlineContent[];
  text?: string;
}

export type InlineContent = TextContent | LinkContent;

export interface TextContent {
  type: "text";
  text: string;
}

export interface LinkContent {
  type: "link";
  text: string;
  href: string;
  inline: boolean;
}

export interface ImageBlock extends BaseBlock {
  type: "image";
  src: string;
  alt: string;
  caption: string;
}

export interface ListBlock extends BaseBlock {
  type: "list";
  ordered: boolean;
  items: string[];
}

export interface CodeBlock extends BaseBlock {
  type: "code_block";
  language: string;
  content: string;
}

export interface BlockquoteBlock extends BaseBlock {
  type: "blockquote";
  text: string;
}

export interface TaskListBlock extends BaseBlock {
  type: "task_list";
  items: TaskListItem[];
}

export interface TaskListItem {
  text: string;
  checked: boolean;
}
