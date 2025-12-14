"use client";

import NextLink from 'next/link';
import Image from 'next/image';
import { Text, Button, Link as FluentLink, SearchBox } from "@fluentui/react-components";
import { SearchRegular } from "@fluentui/react-icons";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-2">
      <div className="mb-4 mt-[-15vh]">
        <Image
            src="/images/caution/404.png"
            alt="Page Not Found Illustration"
            width={100}
            height={100}
            className="mx-auto"
        />
      </div>
      <Text as="h1" weight="semibold" size={700} className="text-[var(--colorNeutralForeground1)] !mb-4">
        这里空空如也 o(TヘTo)
      </Text>
      <Text as="p" size={400} className="text-[var(--colorNeutralForeground2)] leading-relaxed">
        找不到你要查找的页面。它可能已被删除，或可能在建设中。
      </Text>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <NextLink href="/" passHref>
          <Button appearance="primary">
            返回主页
          </Button>
        </NextLink>
        <SearchBox
            placeholder="搜索任意插件或主题..."
            className="w-auto"
        />
      </div>
    </div>
  );
}
