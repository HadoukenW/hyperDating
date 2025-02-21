// load-query.ts
import {sanityClient} from 'sanity:client'


export async function loadQuery({ query, params, enabled}) {
  
  const visualEditingEnabled = enabled === true
  const token = import.meta.env.SANITY_TOKEN
  
  if (visualEditingEnabled && !token) {
    throw new Error(
      'The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing.',
    )
  }

  const perspective = visualEditingEnabled ? 'drafts' : 'published'

  const {result, resultSourceMap} = await sanityClient.fetch(query, params ?? {}, {
    filterResponse: false,
    perspective,
    resultSourceMap: visualEditingEnabled ? 'withKeyArraySelector' : false,
    stega: visualEditingEnabled,
    ...(visualEditingEnabled ? {token} : {}),
    useCdn: !visualEditingEnabled,
  })

  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective,
  }
}