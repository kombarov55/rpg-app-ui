import React from "react"
import AnnouncementView from "./components/Announcement/AnnouncementView";
import AnnoucementCreation from "./components/Announcement/AnnoucementCreation";
import MyAnnouncementView from "./components/Announcement/MyAnnouncementView";

export const announcementView = {component: <AnnouncementView/>, label: "Доска объявлений"}
export const myAnnouncementView = {component: <MyAnnouncementView/>, label: "Мои объявления"}
export const announcementCreationView = {component: <AnnoucementCreation/>, label: "Создание объявления"}