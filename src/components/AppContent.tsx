'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Users, Map, MessageCircle, User, Settings } from "lucide-react";
import { Toaster } from "sonner";
import { useLanguage } from "./LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";
import { LandingPage } from "./LandingPage";
import { HomeScreen } from "./HomeScreen";
import { ReportIssue } from "./ReportIssue";
import { ClubsPage } from "./ClubsPage";
import { ClubDetail } from "./ClubDetail";
import { ImpactDashboard } from "./ImpactDashboard";
import { CommunityEvents } from "./CommunityEvents";
import { EventDetail } from "./EventDetail";
import { ProfileScreen } from "./ProfileScreen";
import { SettingsPage } from "./SettingsPage";

type Screen = 
  | "landing"
  | "login"
  | "signup"
  | "home" 
  | "clubs" 
  | "club-detail"
  | "map" 
  | "community" 
  | "event-detail"
  | "profile" 
  | "settings"
  | "report";

export default function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedClubId, setSelectedClubId] = useState<string>("");
  const [selectedEventId, setSelectedEventId] = useState<string>("");
  const [selectedIssueId, setSelectedIssueId] = useState<string>("");
  const { t } = useLanguage();

  const navItems = [
    { id: "home" as const, icon: Home, label: t("nav.home") },
    { id: "clubs" as const, icon: Users, label: t("nav.clubs") },
    { id: "map" as const, icon: Map, label: t("nav.impact") },
    { id: "community" as const, icon: MessageCircle, label: t("nav.community") },
    { id: "profile" as const, icon: User, label: t("nav.profile") },
  ];

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen("home");
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    setCurrentScreen("home");
  };

  const handleViewClub = (clubId: string) => {
    setSelectedClubId(clubId);
    setCurrentScreen("club-detail");
  };

  const handleViewEvent = (eventId: string) => {
    setSelectedEventId(eventId);
    setCurrentScreen("event-detail");
  };

  const handleViewIssue = (issueId: string) => {
    setSelectedIssueId(issueId);
    setCurrentScreen("club-detail");
  };

  const handleViewProject = (projectId: string) => {
    setCurrentScreen("map");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen("landing");
  };

  const renderScreen = () => {
    const screenVariants = {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    };

    switch (currentScreen) {
      case "landing":
        return (
          <motion.div
            key="landing"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <LandingPage onGetStarted={() => setCurrentScreen("login")} />
          </motion.div>
        );
      case "login":
        return (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LoginPage
              onLogin={handleLogin}
              onSignup={() => setCurrentScreen("signup")}
            />
          </motion.div>
        );
      case "signup":
        return (
          <motion.div
            key="signup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SignupPage
              onSignup={handleSignup}
              onLogin={() => setCurrentScreen("login")}
            />
          </motion.div>
        );
      case "home":
        return (
          <motion.div
            key="home"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <HomeScreen
              onReportIssue={() => setCurrentScreen("report")}
              onViewIssue={handleViewIssue}
            />
          </motion.div>
        );
      case "report":
        return (
          <motion.div
            key="report"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <ReportIssue onClose={() => setCurrentScreen("home")} />
          </motion.div>
        );
      case "clubs":
        return (
          <motion.div
            key="clubs"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <ClubsPage onViewClub={handleViewClub} />
          </motion.div>
        );
      case "club-detail":
        return (
          <motion.div
            key="club-detail"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <ClubDetail
              clubId={selectedClubId}
              onBack={() => setCurrentScreen("clubs")}
              onViewProject={handleViewProject}
            />
          </motion.div>
        );
      case "map":
        return (
          <motion.div
            key="map"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <ImpactDashboard />
          </motion.div>
        );
      case "community":
        return (
          <motion.div
            key="community"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <CommunityEvents onViewEvent={handleViewEvent} />
          </motion.div>
        );
      case "event-detail":
        return (
          <motion.div
            key="event-detail"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <EventDetail
              eventId={selectedEventId}
              onBack={() => setCurrentScreen("community")}
            />
          </motion.div>
        );
      case "profile":
        return (
          <motion.div
            key="profile"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <ProfileScreen />
          </motion.div>
        );
      case "settings":
        return (
          <motion.div
            key="settings"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <SettingsPage
              onBack={() => setCurrentScreen("profile")}
              onLogout={handleLogout}
            />
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="home"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <HomeScreen
              onReportIssue={() => setCurrentScreen("report")}
              onViewIssue={handleViewIssue}
            />
          </motion.div>
        );
    }
  };

  const showHeader = isAuthenticated && !["landing", "login", "signup", "report", "club-detail", "event-detail", "settings"].includes(currentScreen);
  const showNav = isAuthenticated && !["landing", "login", "signup", "report", "club-detail", "event-detail", "settings"].includes(currentScreen);

  return (
    <div className="relative min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      
      {/* Header */}
      <AnimatePresence>
        {showHeader && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="sticky top-0 z-20 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-4 shadow-md"
          >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div>
                <h1 className="text-xl text-white mb-1">🌍 CivicSphere</h1>
                <p className="text-sm text-white/90">
                  {t("nav.home") === "Home" && "The Global Community Action Network"}
                  {t("nav.home") === "Inicio" && "La Red de Acción Comunitaria Global"}
                  {t("nav.home") === "Accueil" && "Le Réseau d'Action Communautaire Mondial"}
                  {t("nav.home") === "होम" && "वैश्विक समुदाय कार्रवाई नेटवर्क"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <LanguageSelector />
                {currentScreen === "profile" && (
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentScreen("settings")}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Settings className="h-5 w-5" />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <div className="relative">{renderScreen()}</div>
      </AnimatePresence>

      {/* Bottom Navigation */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="max-w-2xl mx-auto">
              <nav className="flex items-center justify-around px-2 py-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentScreen === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentScreen(item.id)}
                      className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all relative ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          isActive ? "stroke-[2.5px]" : "stroke-[2px]"
                        }`}
                      />
                      <span className="text-xs">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute -bottom-0 left-1/2 -translate-x-1/2 h-1 w-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}