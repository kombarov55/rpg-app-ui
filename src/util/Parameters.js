export const rootUrl = "https://localhost:8080"

export const loginUrl = rootUrl + "/login"

export const userAccountUrl = (userId) => rootUrl + "/user/" + userId
export const toggleFavAnnouncementUrl = (userId) => userAccountUrl(userId) + "/toggleFavAnnouncement"
export const toggleRespondAnnouncementUrl = (userId) => userAccountUrl(userId) + "/toggleRespAnnouncement"

export const announcementUrl = rootUrl + "/announcement"
export const restoreAnnouncementUrl = announcementId => announcementUrl + "/" + announcementId + "/restore"
export const uploadUrl = rootUrl + "/upload"

export const createCommentUrl = announcementUrl + "/comment"
export const commentUrl = (announcementId) => announcementUrl + "/" + announcementId + "/comment"
export const deleteCommentUrl = (announcementId, commentId) => announcementUrl + "/" + announcementId + "/comment/" + commentId
export const restoreCommentUrl = (announcementId, commentId) => announcementUrl + "/" + announcementId + "/comment/" + commentId + "/restore"

export const conversationUrl = rootUrl + "/conversation"
export const getAllConversationsUrl = userId => rootUrl + "/conversation/" + userId
export const messageUrl = conversationId => conversationUrl + "/" + conversationId + "/message"
export const getMsgsUrl = (conversationId, page, pageSize) => messageUrl(conversationId) + "?page=" + page + "&pageSize=" + pageSize
export const msgLongpollUrl = (conversationId, lastMsgTimestamp, userId) => messageUrl(conversationId) + "/longpoll?lastMsgTimestamp=" + lastMsgTimestamp + "&myUserId=" + userId

export const networkUrl = rootUrl + "/network"
export const deleteNetworkUrl = networkId => networkUrl + "/"  + networkId

export const subnetworkUrl = networkId => networkUrl + "/" + networkId + "/subnetwork"
export const deleteSubnetworkUrl = (networkId, subnetworkId) => subnetworkUrl(networkId) + "/" + subnetworkId

export const gameByNetworkId = networkId => networkUrl + "/" + networkId + "/game"
export const gameBySubnetworkId = (networkId, subnetworkId) => subnetworkUrl(networkId) + "/" + subnetworkId + "/game"
export const deleteGameByNetworkId = (networkId, gameId) => gameByNetworkId(networkId) + "/game/" + gameId
export const deleteGameBySubnetworkId = (networkId, subnetworkId, gameId) => gameBySubnetworkId(networkId, subnetworkId) + "/game/" + gameId