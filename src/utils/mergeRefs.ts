/* eslint-disable @typescript-eslint/no-explicit-any */

export function mergeRefs(...inputRefs: any[]) {
  const filteredInputRefs = inputRefs.filter(Boolean)

  if (filteredInputRefs.length <= 1) {
    return filteredInputRefs[0]
  }

  return function mergedRefs(ref: any) {
    filteredInputRefs.forEach((inputRef) => {
      if (typeof inputRef === 'function') {
        inputRef(ref)
      } else {
        inputRef.current = ref
      }
    })
  }
}
