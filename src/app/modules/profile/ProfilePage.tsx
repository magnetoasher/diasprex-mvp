import React from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { Overview } from "./components/Overview";
import { Campaigns } from "./components/Campaigns";
import { Settings } from "./components/settings/Settings";
import { ProfileHeader } from "./ProfileHeader";
import { Account } from "./components/Account";
import Billing from "./Billing";

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: "Profile",
    path: "/crafted/profile/overview",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const ProfilePage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <ProfileHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path="overview"
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
              <Overview />
            </>
          }
        />
        <Route
          path="campaigns"
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
              <Campaigns />
            </>
          }
        />
        <Route
          path="billing"
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Billing</PageTitle>
              <Billing />
            </>
          }
        />
        <Route
          path="settings"
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Settings</PageTitle>
              <Settings />
            </>
          }
        />
        <Route
          path="account"
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Account</PageTitle>
              <Account />
            </>
          }
        />


        <Route index element={<Navigate to="/profile/overview" />} />
      </Route>
    </Routes>
  );
};

export default ProfilePage;
