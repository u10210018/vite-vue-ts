const sheets = ref<Node[]>([])
const sheetHtml = ref('')

const updateStyle = () => {
  const styleElements = document.documentElement.querySelectorAll('head [data-vite-dev-id]')
  sheets.value = Array.from(styleElements).map(el => el.cloneNode(true))
}

const styleTagObserver = new MutationObserver(updateStyle)

watch(sheets, nVal => {
  sheetHtml.value = nVal.reduce((acc, cur) => {
    return acc.concat((cur as HTMLStyleElement)?.outerHTML)
  }, '')
})

export const useHeadStyle = () => {
  onMounted(() => {
    updateStyle()

    const styleElements = document.documentElement.querySelectorAll('[data-vite-dev-id]')
    styleElements.forEach(el => {
      styleTagObserver.observe(el, { subtree: true, childList: true })
    })
  })

  onBeforeUnmount(() => {
    styleTagObserver.disconnect()
  })

  return {
    sheets,
    sheetHtml,
  }
}
