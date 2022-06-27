const featuredDefaults = [
  {
    discordGuildId: "755548171941445642",
    discordName: "Stargaze",
    discordImg: "/art/featured/stargaze.png",
    link: "https://discord.gg/stargaze",
  },
  {
    discordGuildId: "880885156490133514",
    discordName: "The Strange Clan",
    discordImg: "/art/featured/strange-clan.png",
    link: "https://discord.gg/strangeclan",
  },
  {
    discordGuildId: "949084849069768764",
    discordName: "Bad Kids",
    discordImg: "/art/featured/bad-kids.png",
    link: "https://discord.gg/CUbNQh9bFC",
  },
  {
    discordGuildId: "953490178046033920",
    discordName: "AcreNFT",
    discordImg: "/art/featured/acre-nft.png",
    link: "https://discord.gg/ReFi",
  },
  {
    discordGuildId: "940181948347863050",
    discordName: "Women From Cosmos",
    discordImg: "/art/featured/women-from-cosmos.png",
    link: "https://discord.gg/GhFJaQ3UMe",
  },
  {
    discordGuildId: "943699228906115102",
    discordName: "Starty",
    discordImg: "/art/featured/starty.png",
    link: "https://discord.gg/VJMNNx4EfM",
  },
];

const getMetrics = async () => {
  const url ="https://api.starrybot.xyz/metrics";

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
   
  };
  const response = await fetch(`${url}`, requestOptions);
  if (response.status !== 200) { //OK
    this.setState({ retrievedSaganism: false });
    return {
      other: `Couldn't get metrics.`,
    };
  }
  const body = await response.json();
  return body;
};


export {
  featuredDefaults,
  getMetrics,
}