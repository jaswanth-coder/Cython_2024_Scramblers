chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
    .catch((e => console.error(e)));

chrome.action.onClicked.addListener((e => {
    chrome.sidePanel.setOptions({ tabId: e.id, path: "pages/side_panel.html", enabled: true });
    chrome.sidePanel.open({ tabId: e.id });
    
}));

function loadExtensionBarOnIcon() {
    chrome.action.setIcon({
      path: {
        '16': '/icons/16x16.png',
        '32': '/icons/32x32.png',
        '128': '/icons/128x128.png'
      }
    });
  }
  
  function loadExtensionBarOffIcon() {
    chrome.action.setIcon({
      path: {
        '16': '/icons/16x16.png',
        '32': '/icons/32x32.png',
        '128': '/icons/128x128.png'
      }
    });
  }
  

  

  
