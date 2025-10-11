import { RefreshCcwIcon, BellIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function NoData({title, description}) {
  return (
    <Empty className="h-full text-muted-foreground">
      <EmptyHeader>
        {/* <EmptyMedia variant="icon">
          <BellIcon />
        </EmptyMedia> */}
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>
          {description}
        </EmptyDescription>
      </EmptyHeader>
      {/* <EmptyContent>
        <Button variant="outline" size="sm">
          <RefreshCcwIcon />
          Refresh
        </Button>
      </EmptyContent> */}
    </Empty>
  )
}
