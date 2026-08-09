"use client";

import { useState } from "react";
import Editor, { loader } from "@monaco-editor/react";
import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={
        isExpanded
          ? "fixed inset-0 z-50 flex flex-col bg-zinc-950 p-4 transition-all"
          : "relative overflow-hidden rounded-xl border border-zinc-800"
      }
    >
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-3 py-2">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          Code Editor ({language})
        </span>
        <Button
          size="sm"
          variant="ghost"
          className="h-7 px-2 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
          onClick={() => setIsExpanded((v) => !v)}
          title={isExpanded ? "Minimize Editor" : "Expand Editor"}
        >
          {isExpanded ? (
            <>
              <Minimize2 className="mr-1.5 h-3.5 w-3.5" /> Exit Fullscreen
            </>
          ) : (
            <>
              <Maximize2 className="mr-1.5 h-3.5 w-3.5" /> Expand Editor
            </>
          )}
        </Button>
      </div>

      <div className={isExpanded ? "flex-1" : "h-[450px]"}>
        <Editor
          height="100%"
          language={monacoLanguageMap[language]}
          value={code}
          onChange={(value) => onChange(value ?? "")}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: isExpanded },
            smoothScrolling: true,
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
}
