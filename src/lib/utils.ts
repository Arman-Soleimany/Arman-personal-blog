import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  let html = "";
  let inList = false;
  let inCodeBlock = false;
  let codeContent = "";

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        html += `<pre><code>${escapeHtml(codeContent.trimEnd())}</code></pre>\n`;
        codeContent = "";
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }
    if (inCodeBlock) {
      codeContent += line + "\n";
      continue;
    }
    if (inList && !line.startsWith("- ") && !line.startsWith("* ")) {
      html += "</ul>\n";
      inList = false;
    }
    if (line.trim() === "") continue;

    if (line.startsWith("### ")) {
      html += `<h3>${inlineFmt(line.slice(4))}</h3>\n`;
    } else if (line.startsWith("## ")) {
      html += `<h2>${inlineFmt(line.slice(3))}</h2>\n`;
    } else if (line.startsWith("# ")) {
      html += `<h1>${inlineFmt(line.slice(2))}</h1>\n`;
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      if (!inList) {
        html += "<ul>\n";
        inList = true;
      }
      html += `<li>${inlineFmt(line.slice(2))}</li>\n`;
    } else if (/^\d+\.\s/.test(line)) {
      html += `<li>${inlineFmt(line.replace(/^\d+\.\s/, ""))}</li>\n`;
    } else {
      html += `<p>${inlineFmt(line)}</p>\n`;
    }
  }
  if (inList) html += "</ul>\n";
  return html;
}

function inlineFmt(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
