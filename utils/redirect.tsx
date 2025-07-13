import { fetchRedirectList, type RedirectItem } from "@/services/redirectList"
import { permanentRedirect, redirect } from "next/navigation"

export const redirectHandler = async (slug: string, enableDraft: boolean = false): Promise<any> => {
  const redirectList = await fetchRedirectList(enableDraft)
  const item = redirectList.find((item: RedirectItem) => (
    item.source === `/${slug}`
  ))
  if (item !== undefined) {
    return item.permanent ? permanentRedirect(item.destination) : redirect(item.destination)
  }
}
