import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface MamberAvatarProps {
  name: string;
  className?: string;
  fallbackClassName?: string;
}

const MamberAvatar = ({
  name,
  className,
  fallbackClassName,
}: MamberAvatarProps) => {
  return (
    <Avatar
      className={cn(
        "size-5 transition border border-neutral-300 rounded-full",
        className
      )}
    >
      <AvatarFallback
        className={cn(
          "text-neutral-500 bg-neutral-200 font-medium flex items-center justify-center",
          fallbackClassName
        )}
      >
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
export default MamberAvatar;
