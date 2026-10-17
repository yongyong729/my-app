import Link from "next/link";
import { getNotices } from "@/lib/notices";

export default async function NoticesPage() {
  const notices = await getNotices();

  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-8 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">공지사항</h1>
        <Link
          href="/notices/new"
          className="rounded-md border border-black/[.08] px-3 py-1.5 text-sm hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.05]"
        >
          글쓰기
        </Link>
      </div>
      <ul className="flex flex-col gap-4">
        {notices.map((n) => (
          <li key={n.id}>
            <Link
              href={`/notices/${n.id}`}
              className="block rounded-lg border border-black/[.08] px-5 py-4 transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.05]"
            >
              <p className="font-medium text-zinc-950 dark:text-zinc-50">{n.title}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {n.author} · {n.createdAt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
