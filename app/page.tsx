import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

const CARD_ITEMS = [
  {
    id: 0,
    title: 'Posts',
    count: 100,
    icon: <Newspaper className="text-slate-500 dark:text-slate-200" size="72" />
  },
  {
    id: 1,
    title: 'Categories',
    count: 12,
    icon: <Folder className="text-slate-500 dark:text-slate-200" size="72" />
  },
  {
    id: 2,
    title: 'Users',
    count: 750,
    icon: <User className="text-slate-500 dark:text-slate-200" size="72" />
  },
  {
    id: 3,
    title: 'Comments',
    count: 1200,
    icon: <MessageCircle className="text-slate-500 dark:text-slate-200" size="72" />
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        {CARD_ITEMS.map(({ id, ...item }) =>
          <DashboardCard key={id} {...item} />
        )}
      </div>
      <AnalyticsChart />
      <PostsTable title="Latest Posts" limit={5}/>
    </>
  );
}
