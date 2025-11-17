import { useState } from "react";
import { useCopyToClipboard, Button } from "l3ui";
import styles from "./useCopyToClipboardDemo.module.css";

export default function UseCopyToClipboardDemo() {
  const [text, setText] = useState("Copy this text!");
  const { copiedText, copy } = useCopyToClipboard();

  return (
    <div className={styles.container}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
      />

      <Button variant="primary" onClick={() => copy(text)}>
        {copiedText === text ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}
