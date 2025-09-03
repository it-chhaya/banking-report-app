import { Heading } from "@/components/heading";
import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CustomerCreateForm from "@/features/customer/components/customer-create-form";
import { cn } from "@/lib/utils";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

type CustomerPageProps = {
    params: {
        customerNo: string
    }
}

export default async function Page({params}: CustomerPageProps) {

    const { customerNo } = await params

    return (
        <PageContainer scrollable={false}>
            <div className='flex flex-1 flex-col space-y-4'>
                <div className='flex items-start justify-between'>
                    <Heading
                        title={'Create new customer: ' + customerNo}
                        description='Create a new customer in report system'
                    />
                    <Link
                        href='/dashboard/customer'
                        className={cn(buttonVariants(), 'text-xs md:text-sm')}
                    >
                        <IconPlus className='mr-2 h-4 w-4' /> List customers
                    </Link>
                </div>
                <Separator />
                <CustomerCreateForm data={customerNo}/>
            </div>
        </PageContainer>
    )  
}