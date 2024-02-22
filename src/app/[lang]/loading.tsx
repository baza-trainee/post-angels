import { ICONS } from '@/components/icons';

export default function Loading() {
  return (
    <div className="flex h-screen flex-grow items-center justify-center p-2">
      <ICONS.LOGODARK className="h-[400px] w-[400px] animate-pulse" />
    </div>
  );
}
