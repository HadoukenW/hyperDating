import { stegaClean } from '@sanity/client/stega'

export function getCleanClassName(element) {
    return stegaClean(element)
}