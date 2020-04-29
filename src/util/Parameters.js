export const rootUrl = "https://localhost:8080"

export const announcementUrl = rootUrl + "/announcement"
export const createCommentUrl = announcementUrl + "/comment"
export const commentUrl = (announcementId) => announcementUrl + "/" + announcementId + "/comment"
export const deleteCommentUrl = (announcementId, commentId) => announcementUrl + "/" + announcementId + "/comment/" + commentId
export const uploadUrl = rootUrl + "/upload"
export const loginUrl = rootUrl + "/login"

