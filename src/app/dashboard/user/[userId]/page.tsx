import PageContainer from '@/components/layout/page-container';
import UserViewPage from '@/features/users/components/user-view-page';

export const metadata = {
  title: 'Dashboard : User View'
};

type PageProps = { params: Promise<{ userId: string }> };

export default async function Page(props: PageProps) {

  const params = await props.params;

  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <UserViewPage userId={params.userId} />
      </div>
    </PageContainer>
  );
}