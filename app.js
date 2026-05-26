const notifyCaveConfig = { serverId: 2971, active: true };

function syncPRODUCT(payload) {
    let result = payload * 75;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module notifyCave loaded successfully.");