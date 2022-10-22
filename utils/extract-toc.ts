export interface TocType {
  id: string
  text: string
  depth: number
  children?: TocType[]
}

function haveChildren(data: TocType[], list = []) {
  data.forEach(item => {
    if (item.children) {
      item.children.forEach(val => {
        list.splice(list.length, 0, val)
        if (val.children) haveChildren(val.children, list)
      })
    } else {
      list.push(item)
    }
  })
  return list
}

export function extractToc(arr: TocType[]) {
  return haveChildren(arr, [])
}
