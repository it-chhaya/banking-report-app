import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useGetCustomerByNoQuery } from "../customerApi"

export default function CustomerInfoDialog({ open, isClose, data }: {
    open: boolean,
    isClose: () => void,
    data: string
}) {

    const { data: customer, isLoading } = useGetCustomerByNoQuery(data)

    return (
        <Dialog open={open} onOpenChange={isClose}>
            <DialogContent
                onInteractOutside={(e) => e.preventDefault()}
                //onEscapeKeyDown={(e) => e.preventDefault()}
            >
                <DialogHeader>
                    <DialogTitle>Customer Details</DialogTitle>
                    <DialogDescription>
                        This is details information of customer
                    </DialogDescription>
                </DialogHeader>
                {
                    isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <span className="text-sm">Cust No:</span>
                                <p className="font-medium">{customer?.customerNo}</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm">First Name:</span>
                                <p className="font-medium">{customer?.firstName}</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm">Last Name:</span>
                                <p className="font-medium">{customer?.lastName}</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm">Email:</span>
                                <p className="font-medium">{customer?.email}</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm">Segment:</span>
                                <p className="bg-amber-400 text-shadow-amber-50 p-2 border-8 font-medium">{customer?.segment}</p>
                            </div>
                        </div>
                    )
                }
            </DialogContent>
        </Dialog>
    )
}