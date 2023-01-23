import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

export default function HashTag({ text, href, count = 0 }) {
  return (
    <Link className="text-base hover:text-sora hover:underline" href={href}>
      <FontAwesomeIcon className="mr-1" icon={faHashtag} />
      {`${text} (${count})`}
    </Link>
  )
}
