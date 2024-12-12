export function cn(...inputs: Array<string | boolean>) {
  return inputs.filter((x) => !!x).join(" ");
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("pt-BR", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min de leitura`;
}
