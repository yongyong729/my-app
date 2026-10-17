import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-4 px-8 py-16">
      <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">소개</h1>
      <p className="text-zinc-600 dark:text-zinc-400">이 페이지는 app/about/page.tsx 입니다.</p>
      <Link href="/" className="text-sm underline underline-offset-4">
        홈으로 이동하기
      </Link>
    </div>
  );
}
