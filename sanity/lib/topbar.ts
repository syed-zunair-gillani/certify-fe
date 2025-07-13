import { readClient } from '../client'

export async function getTopBar() {
  const query = `*[_type == "topBar" && enabled == true][0]{ content }`
  return await readClient.fetch(query)
}
