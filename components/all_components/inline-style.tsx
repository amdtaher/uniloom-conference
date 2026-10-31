import fs from "fs";
import path from "path";

interface InlineStyleProps {
  file: string;
}

/**
 * Server component. Injects one file from styles/uniloom/ as its own <style> tag,
 * exactly like the original <style> blocks of the Webflow export. Each block stays a
 * separate stylesheet on purpose (one block ends with a stray "}" that must not leak
 * into the next block).
 */
export default function InlineStyle({ file }: InlineStyleProps) {
  const css = fs.readFileSync(path.join(process.cwd(), "styles", "uniloom", file), "utf8");
  return <style data-uniloom={file} dangerouslySetInnerHTML={{ __html: css }} />;
}
