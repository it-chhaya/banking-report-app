import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useDeleteCustomerByNoMutation } from "../customerApi"

export function CustomerDeleteDialog({open, isClose, data}: {
    open: boolean,
    isClose: () => void,
    data: string
}) {

    const [ deleteCustomerByNo, { isLoading }] = useDeleteCustomerByNoMutation()

  return (
    <Dialog open={open} onOpenChange={isClose}>
      <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete customer</DialogTitle>
            <DialogDescription>
              This action is dangerous, please be careful
            </DialogDescription>
          </DialogHeader>
          <p className="text-red-700">Are you sure to delete?</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
                disabled={isLoading}
                onClick={() => deleteCustomerByNo(data)} variant="destructive">
                {isLoading ? "Deleting" : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
