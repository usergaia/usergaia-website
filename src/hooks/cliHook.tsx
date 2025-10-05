"use client";
import { useState, useRef, useEffect } from "react";
import { cliData } from "@/data/CLI";

export function useKeyboard() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<{ cmd: string; res: string }[]>([]);
  const [fortuneTimestamps, setFortuneTimestamps] = useState<number[]>([]);
  const sudoCounter = useRef(0);

  // scroll anchor
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [output]);

  const fetchCommand = async (input: string): Promise<string | null> => {
    const [cmd, ...args] = input.split(" ");

    switch (cmd) {
      case "whoami":
        return cliData.whoami;

      case "ls":
        return Object.keys(cliData.files).join("  ");

      case "cat":
        if (args.length === 0) return "Usage: cat <filename>";
        const file = args.join(" ");
        return cliData.files[file] || `cat ${file}: No such file`;

      case "sudo":
        if (args.length === 0) return "Usage: sudo <anything>";
        sudoCounter.current += 1;
        if (sudoCounter.current === 1) {
          return "PERMISSION DENIED: Don't you feel silly now?";
        }
        if (sudoCounter.current === 2) {
          return "PERMISSION DENIED: Uhh, this is awkward.";
        } else if (sudoCounter.current === 3) {
          return "PERMISSION DENIED: Still nope.";
        } else {
          return "PERMISSION DENIED: Give it up already.";
        }

      case "echo":
        return args.length === 0 ? "Usage: echo <anything>" : args.join(" ");

      case "cmd":
        return cliData.cmd.join("\n");

      case "fortune": {
        const now = Date.now();
        const oneMinuteAgo = now - 60 * 1000;
        const recent = fortuneTimestamps.filter((t) => t > oneMinuteAgo);

        if (recent.length >= 3) {
          return "You've asked too much of fate. The fortune teller has stepped out for tea.";
        }

        try {
          const res = await fetch("https://dummyjson.com/quotes/random");
          const data = await res.json();
          setFortuneTimestamps([...recent, now]);
          return `"${data.quote}" \n\t— ${data.author}`;
        } catch {
          return "You've asked too much of fate. The fortune teller has stepped out for tea.";
        }
      }

      case "clear":
        return null;

      default:
        return `Command not found: ${input}`;
    }
  };

  const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const command = input.trim();
      const result = await fetchCommand(command);
      if (result) {
        setOutput((prev) => [...prev, { cmd: command, res: result }]);
        setInput("");
      } else {
        setOutput([]); // clear
        setInput("");
      }
    }
  };

  return { handleEnter, terminalBodyRef, output, input, setInput };
}
