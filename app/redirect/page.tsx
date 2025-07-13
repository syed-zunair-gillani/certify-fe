import { redirectHandler } from "@/utils/redirect"
import { notFound } from 'next/navigation'

interface Props {
  searchParams: {
    pathname: string
  }
}

export default async function CustomPage({ searchParams }: Props): Promise<any> {
  const pathname = searchParams?.pathname
  if (pathname !== undefined) {
    await redirectHandler(pathname)
  }

  notFound()
}
