import { Payments, SchemaTypes } from '@/components/Payment/Payments.props';
import { Locale } from '@/i18n.config';
import type { getDictionary } from '@/lib/dictionary';

export interface PageContentProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['common'];
  payments: Payments;
  schema: SchemaTypes;
  lang: Locale;
}
