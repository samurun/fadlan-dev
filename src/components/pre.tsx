'use client';
import React, { ReactNode, HTMLProps } from 'react';
import { CopyButton } from './copy-button';

interface PreProps extends HTMLProps<HTMLPreElement> {
  children?: ReactNode;
  'data-language'?: string;
}

const getTextFromChildren = (children: ReactNode): string => {
  let text = '';

  React.Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      text += child; // Add text directly
    } else if (React.isValidElement(child)) {
      text += getTextFromChildren(child.props.children); // Recursively get text from nested children
    }
    // Ignore other types of children like null, undefined, boolean, etc.
  });

  return text;
};

const Pre: React.FC<PreProps> = ({ children, ...props }) => {
  const lang = props['data-language'];
  const text = getTextFromChildren(children);

  return (
    <pre {...props} className='p-0'>
      <div className='flex justify-between p-2 bg-background'>
        <span className='text-muted-foreground'>{lang} </span>
        <CopyButton text={text} />
      </div>
      {children}
    </pre>
  );
};

export default Pre;
