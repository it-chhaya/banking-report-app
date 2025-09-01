import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import CustomerInfoDialog from "./customer-info-dialog"
import { useState } from "react"

export default function CustomerActions() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    function onCustomerDetail() {
        console.log('onCustomerDetail')
        setIsOpen(true)
    }


    return (
        <>

            <CustomerInfoDialog
                open={isOpen}
                isClose={() => setIsOpen(false)}
            />
            
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => onCustomerDetail()}>
                        Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-700 focus:text-red-700">Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}