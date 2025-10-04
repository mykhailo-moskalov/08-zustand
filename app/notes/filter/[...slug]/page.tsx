import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import { NoteTag } from "@/types/note";

type NotesPageProps = {
  params: Promise<{ slug: string[] }>;
};

const NotesPage = async ({ params }: NotesPageProps) => {
  const queryClient = new QueryClient();

  const query = "";
  const page = 1;

  const tag = (await params).slug?.[0];
  const allowedTag = Object.values(NoteTag).includes(tag as NoteTag)
    ? (tag as NoteTag)
    : undefined;

  await queryClient.prefetchQuery({
    queryKey: ["notes", query, page, allowedTag],
    queryFn: () => fetchNotes(query, page, allowedTag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient query={query} page={page} tag={allowedTag} />
    </HydrationBoundary>
  );
};

export default NotesPage;
