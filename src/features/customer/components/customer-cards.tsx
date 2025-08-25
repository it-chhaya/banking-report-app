"use client"

import { IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useGetCustomersQuery } from "../customerApi"

export function CustomerCards() {

    const { data, isLoading, error } = useGetCustomersQuery()

    console.log("data:", data)
    console.log("isLoading:", isLoading)
    console.log("error:", error)

    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-3 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-3 @5xl/main:grid-cols-3">
            {
                data && data.map(customer => (
                    <Card className="@container/card" key={customer.customerNo}>
                        <CardHeader>
                            <CardDescription>{customer.customerNo}</CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                {customer.firstName} {customer.lastName}
                            </CardTitle>
                            <CardAction>
                                <Badge variant="outline">
                                    <IconTrendingUp />
                                    segment
                                </Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className="flex-col items-start gap-1.5 text-sm">
                            <div className="line-clamp-1 flex gap-2 font-medium">
                                {customer.email}
                            </div>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}
