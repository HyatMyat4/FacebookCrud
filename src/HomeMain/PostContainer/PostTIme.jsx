import React from 'react'
import { parseISO , formatDistanceToNow } from 'date-fns'
const PostTIme = ({timestamp}) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
  return (
    <div>
        &nbsp;<i>{timeAgo}<i class="fa-solid fa-earth-asia ml-[5px]"></i></i>
    </div>
  )
}

export default PostTIme