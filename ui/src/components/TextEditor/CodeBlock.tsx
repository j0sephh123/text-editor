import { useRef, useEffect } from 'react';

type Props = {
  tokens: any[];
};

const CodeBlock = ({ tokens }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      // Clear the content
      divRef.current.innerHTML = '';

      // Add the tokenized content
      tokens.forEach((token: any) => {
        const span = document.createElement('span');
        span.className = `token ${token.type.label}`;

        // Handle undefined token values
        if (token.value !== undefined) {
          span.textContent = token.value;
        } else {
          // Fallback to using the label as content if value is undefined
          // You can also add custom logic here based on the specific type
          span.textContent = token.type.label;
        }

        if (divRef.current) {
          divRef.current.appendChild(span);
        }
      });
    }
  }, [tokens]);

  return <div ref={divRef} contentEditable="true"></div>;
};

export default CodeBlock;
