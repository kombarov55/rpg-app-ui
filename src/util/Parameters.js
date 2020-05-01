export const rootUrl = "https://localhost:8080"

export const loginUrl = rootUrl + "/login"

export const userAccountUrl = (userId) => rootUrl + "/user/" + userId
export const toggleFavAnnouncementUrl = (userId) => userAccountUrl(userId) + "/toggleFavAnnouncement"

export const announcementUrl = rootUrl + "/announcement"
export const restoreAnnouncementUrl = announcementId => announcementUrl + "/" + announcementId + "/restore"
export const uploadUrl = rootUrl + "/upload"

export const createCommentUrl = announcementUrl + "/comment"
export const commentUrl = (announcementId) => announcementUrl + "/" + announcementId + "/comment"
export const deleteCommentUrl = (announcementId, commentId) => announcementUrl + "/" + announcementId + "/comment/" + commentId
export const restoreCommentUrl = (announcementId, commentId) => announcementUrl + "/" + announcementId + "/comment/" + commentId + "/restore"

export const conversationUrl = rootUrl + "/conversation"
export const getAllConversationsUrl = userId => rootUrl + "/conversation/" + userId
export const getMsgsUrl = (conversationId, page, pageSize) => conversationUrl + "/" + conversationId + "/message?page=" + page + "&pageSize=" + pageSize