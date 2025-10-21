'use client';

import { useEffect, useState } from "react";
import Splash from "../app/view/splash";
import HomePage from "../app/view/home";
import AccountPage from "../app/view/account";
import StudioPage from "../app/view/studio";
import Drawer from "../app/view/navigation-components/drawer";
import Game from "../app/view/game";
import { PageProvider, usePage } from "../app/view/page-context";

function PageContent() {
  const { currentPage } = usePage();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch(currentPage){
      case 'home' : return <HomePage/>;
      case 'account' : return <AccountPage/>;
      case 'studio' : return <StudioPage/>;
      case 'game' : return <Game/>;
      default: return <HomePage/>;
    }
  };

  return showSplash ? <Splash/> : (
    <div>
      {renderPage()}
      <Drawer/>
    </div>
  );

  /*
  if (showSplash) {
    return <Splash />;
  }

  // khusus untuk game, tidak tampilkan Drawer
  if (currentPage === 'game') {
    return renderPage();
  }

  return (
    <div>
      {renderPage()}
      <Drawer/>
    </div>
  );
  */ 
}

export default function Page() {
  return (
    <PageProvider>
      <PageContent/>
    </PageProvider>
  );
}
