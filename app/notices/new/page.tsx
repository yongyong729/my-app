import { SubmitButton } from "@/components/SubmitButton";
import { createNoticeAction } from "@/lib/actions";

const field = "rounded-md border border-black/[.15] bg-transparent px-3 py-2 dark:border-white/[.2]";

export default function NewNoticePage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-8 py-16">
      <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">새 공지 작성</h1>

      <form action={createNoticeAction} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title">제목</label>
          <input type="text" id="title" name="title" required className={field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="author">작성자</label>
          <input type="text" id="author" name="author" required className={field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="content">내용</label>
          <textarea id="content" name="content" rows={6} required className={field} />
        </div>
        <SubmitButton label="등록하기" />
      </form>
    </div>
  );
}
