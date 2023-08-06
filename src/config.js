module.exports = {
  token: process.env.token || "MTEzNDQ0NjYwMjQwOTQ4NDMzOA.GYrXhk.eL0sjvCrXv1hdES_dd_A9KbzCbFo4Vg_OrJyq8", // Your bot token
  channelId: process.env.channelId || "1137764661832458250", //Channel Id you want to send the message

  nodes: [
    {
      host: "lava.lykhost.link",
      password: "lavalykhost",
      port: 443,
      retryDelay: 10000,
      retryAmount: 25,
      identifier: "",
      secure: true,
    },
    {
      host: "",
      password: "",
      port: 443,
      retryDelay: 300000,
      retryAmount: 25,
      identifier: "",
      secure: true,
    },
    {
      host: "",
      password: "",
      port: 443,
      retryDelay: 300000,
      retryAmount: 25,
      identifier: "",
      secure: true,
    },
  ],
};
