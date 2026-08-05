"use client";

import Editor from "@monaco-editor/react";
import type { LanguageKey } from "@/types/problem";

const monacoLanguageMap: Record<LanguageKey, string> = {
  java: "java",
  python: "python",
};

export function CodeEditorPanel({
  language,
  code,
  onChange,
}: {
  language: LanguageKey;
  code: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800">
      <Editor
        height="420px"
        language={monacoLanguageMap[language]}
        value={code}
        onChange={(value) => onChange(value ?? "")}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          smoothScrolling: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}
