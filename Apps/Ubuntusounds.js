var snd = $store.get("settings.json");
snd.sounds.boot = "https://hexnd.gq/ubuntu/desktop-login.ogg";
snd.sounds.alert = "https://hexnd.gq/ubuntu/dialog-question.ogg";
snd.sounds.error = "https://hexnd.gq/ubuntu/dialog-warning.ogg";
$store.set("settings.json", snd);
$explorer.refresh();