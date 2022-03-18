import TwitchApi from "node-twitch";

const twitch = new TwitchApi({
  client_id: "chi11mo",
  client_secret: "oauth:z7h9ab45o4n05xc9pvpkx86somhslt"
});
async function getStream(){
  const streams = await twitch.getStreams({ channel: "chi11mo" });
  console.log(streams);
}

getStream();
