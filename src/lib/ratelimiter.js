const LIMIT_KEY = 'lastEmailSent';
const TIME_LIMIT = 60 * 1000; // 60 segundos

export function canSendEmail() {
  const last = localStorage.getItem(LIMIT_KEY);
  if (!last) return true;
  const now = Date.now();
  return now - parseInt(last) > TIME_LIMIT;
}

export function updateEmailTimestamp() {
  localStorage.setItem(LIMIT_KEY, Date.now().toString());
}
