export function convertSupabaseDateString(dateString: string) {
  const tPosition = dateString.indexOf(' ');
  const plusPosition = dateString.indexOf('+');
  return (
    dateString.slice(0, tPosition) +
    'T' +
    dateString.slice(tPosition + 1, plusPosition) +
    ':' +
    dateString.slice(plusPosition + 1)
  );
}
