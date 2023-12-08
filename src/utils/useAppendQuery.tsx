import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useAppendQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const appendQuery = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      router.push(pathname + "?" + params.toString());
    },
    [searchParams, pathname, router],
  );

  return appendQuery;
};

export default useAppendQuery;
