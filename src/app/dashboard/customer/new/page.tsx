import { Heading } from "@/components/heading";
import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CustomerCreateForm from "@/features/customer/components/customer-create-form";
import { cn } from "@/lib/utils";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
    return (
        <PageContainer scrollable={false}>
            <div className='flex flex-1 flex-col space-y-4'>
                <div className='flex items-start justify-between'>
                    <Heading
                        title='Create new customer'
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
                <CustomerCreateForm/>
            </div>
        </PageContainer>
    )  
}