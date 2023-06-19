import { ElMessage } from 'element-plus'


// 消息 message 

export function toast(message, type = "success", dangerouslyUseHTMLString = false) {
    ElMessage({
        message: message,
        type: type,
        grouping: false,
        dangerouslyUseHTMLString,
        duration: 2424
    })
}