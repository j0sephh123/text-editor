import { useState, useEffect } from 'react';
import { tokenizer } from 'acorn';
import type { Comment } from 'acorn';
import CodeBlock from './CodeBlock';

type Props = {
  code: string;
};

const TextEditor = ({ code }: Props) => {
  const [tokens, setTokens] = useState<any[]>([]);

  useEffect(() => {
    const essentialTokens = tokenizer(code, {
      ecmaVersion: 'latest',
    });

    const newTokens = [];
    let token;
    while ((token = essentialTokens.getToken()).type.label !== 'eof') {
      newTokens.push(token);
      console.log(token);
    }
    setTokens(newTokens);
  }, [code]);

  return (
    <div>
      <CodeBlock tokens={tokens} />
    </div>
  );
};

export default TextEditor;
