import { ElMessage } from 'element-plus'

/**
 * 复制文本到剪贴板（兼容旧浏览器）
 * @param text 要复制的文本
 * @param successMsg 成功提示（默认"复制成功"）
 * @param errorMsg 失败提示（默认"复制失败，请手动复制"）
 */
export function copyToClipboard(
  text: string,
  successMsg = '复制成功',
  errorMsg = '复制失败，请手动复制'
): void {
  if (!text) return

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        ElMessage.success(successMsg)
      })
      .catch(() => {
        fallbackCopy(text, successMsg, errorMsg)
      })
  } else {
    fallbackCopy(text, successMsg, errorMsg)
  }
}

function fallbackCopy(text: string, successMsg: string, errorMsg: string): void {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  try {
    document.execCommand('copy')
    ElMessage.success(successMsg)
  } catch {
    ElMessage.error(errorMsg)
  }
  document.body.removeChild(textarea)
}
