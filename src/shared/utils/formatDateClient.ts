import { formatDate } from 'date-fns';

export function formatDateClient(value: string) {
  return formatDate(value, 'dd.MM.yyyy');
}
