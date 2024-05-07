const redirectList = [
    { id: 1, label: "Cython -> someotherwebsite", from: "https://cython2024.webhop.me/wsite/contact.php", to: "https://www.youtube.com", enabled: true },

]

let localRedirectList

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ hardRedirectorList: redirectList })
    chrome.storage.local.get("hardRedirectorList", (localRedirectList) => {
        clearSessionRules(redirectList)
        applySessionRules(localRedirectList)
    });
});

chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get("hardRedirectorList", (localRedirectList) => {
        clearSessionRules(redirectList)
        applySessionRules(localRedirectList)
    });
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (namespace === "local" && changes.hardRedirectorList?.newValue) {
        chrome.storage.local.get("hardRedirectorList", (localRedirectList) => {
            clearSessionRules(redirectList)
            applySessionRules(localRedirectList)
        });
    }
});

let clearSessionRules = (redirectList) => {
    chrome.declarativeNetRequest.updateSessionRules({
        removeRuleIds: Array(redirectList.length).fill().map((_, i) => i + 1)
    })
}

let applySessionRules = (localRedirectList) => {
    chrome.declarativeNetRequest.updateSessionRules(formatRules(onlyEnabled(localRedirectList.hardRedirectorList)))
}

let onlyEnabled = (localRedirectList) => {
    return localRedirectList.filter((rule) => { return rule.enabled == true })
}

let formatRules = (localRedirectList) => {
    let delIds = []
    let rules = []
    for (let i = 0; i < localRedirectList.length; i++) {
        rules.push({
            id: localRedirectList[i].id,
            action: {
                type: "redirect",
                redirect: { regexSubstitution: localRedirectList[i].to }
            },
            condition: {
                resourceTypes: ["main_frame"],
                regexFilter: localRedirectList[i].from
            }
        })
        delIds.push(i + 1)
    }
    return { removeRuleIds: delIds, addRules: rules }
}
