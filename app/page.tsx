import Link from "next/link";

const pages = [
  {
    href: "/notices",
    title: "공지사항 게시판",
    desc: "목록, 상세, 글쓰기. Server Action으로 새 공지를 등록합니다.",
  },
  {
    href: "/products",
    title: "상품 목록",
    desc: "비동기 데이터 불러오기와 loading 화면, 좋아요 버튼.",
  },
  {
    href: "/about",
    title: "소개",
    desc: "파일 기반 라우팅으로 만든 페이지.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-16 px-8 py-20">
      <section className="flex flex-col gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">중부대학교 정보보호학과</p>
        <h1 className="text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl dark:text-zinc-50">
          정용훈
        </h1>
        <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          웹서버보안프로그래밍 수업에서 Next.js로 만든 실습 프로젝트입니다.
          웹 서비스를 직접 만들면서 어떻게 안전하게 만드는지 공부하고 있습니다.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">둘러보기</h2>
        <ul className="flex flex-col">
          {pages.map((p) => (
            <li key={p.href} className="border-t border-black/[.08] last:border-b dark:border-white/[.145]">
              <Link
                href={p.href}
                className="flex flex-col gap-1 py-5 transition-colors hover:bg-black/[.02] focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-white/[.03]"
              >
                <span className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">{p.title}</span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">팀 프로젝트</h2>
        <div className="flex flex-col gap-2 rounded-lg border border-black/[.08] p-6 dark:border-white/[.145]">
          <p className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">세이프보드</p>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            로그인 기능이 있는 보안 강화 게시판. 게시글·댓글 작성과 XSS 방어를 맡았습니다.
          </p>
          <p className="text-sm text-zinc-500">Next.js · TypeScript · MongoDB</p>
        </div>
      </section>
    </main>
  );
}
