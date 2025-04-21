const { Client, GatewayIntentBits } = require('./discord.js/src/index.js');
const fs = require('fs');

function loadEnv() {
    const env = fs.readFileSync('.env', 'utf8');
    env.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        process.env[key.trim()] = value.trim();
    });
}

loadEnv(); // Load environment variables from a .env file

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Replace with your channel name or ID
const CHANNEL_NAME = 'guest-submissions';

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    try {
        // Fetch the channel by name or ID
        const guild = client.guilds.cache.first(); // Assumes the bot is in one guild
        const channel = guild.channels.cache.find(ch => ch.name === CHANNEL_NAME);

        if (!channel || channel.type !== 0) { // Ensure it's a text channel
            console.error(`Channel "${CHANNEL_NAME}" not found or is not a text channel.`);
            return;
        }

        console.log(`Fetching messages from channel: ${channel.name}`);

        // Fetch messages from the channel
        const messages = await channel.messages.fetch({ limit: 100 }); // Adjust limit as needed
        const reports = [];

        messages.forEach(message => {
            // Example: Parse messages with specific formatting
            if (message.content.includes('**🚔 Positive Police Interaction Submission**')) {
                const report = parseReport(message.content);
                if (report) {
                    reports.push(report);
                }
            }
        });

        console.log(`Fetched ${reports.length} reports.`);
        console.log(reports);

        // You can now save these reports to a database or use them in your application
    } catch (error) {
        console.error('Error fetching messages:', error);
    } finally {
        client.destroy(); // Disconnect the bot
    }
});

// Parse a report from the message content
function parseReport(content) {
    try {
        const lines = content.split('\n');
        const report = {};

        lines.forEach(line => {
            if (line.startsWith('**From:**')) {
                report.name = line.replace('**From:**', '').trim();
            } else if (line.startsWith('**Vehicle:**')) {
                report.vehicle = line.replace('**Vehicle:**', '').trim();
            } else if (line.startsWith('**Insurance:**')) {
                report.insurance = line.replace('**Insurance:**', '').trim();
            } else if (line.startsWith('**Officer:**')) {
                report.officer = line.replace('**Officer:**', '').trim();
            } else if (line.startsWith('**Badge/Vehicle ID:**')) {
                report.badge = line.replace('**Badge/Vehicle ID:**', '').trim();
            } else if (line.startsWith('**Location:**')) {
                report.location = line.replace('**Location:**', '').trim();
            } else if (line.startsWith('**Date & Time:**')) {
                report.datetime = line.replace('**Date & Time:**', '').trim();
            } else if (line.startsWith('**Bodycam Used:**')) {
                report.bodycam = line.replace('**Bodycam Used:**', '').trim();
            } else if (line.startsWith('**Summary:**')) {
                report.summary = line.replace('**Summary:**', '').trim();
            } else if (line.startsWith('**Why it was positive:**')) {
                report.impact = line.replace('**Why it was positive:**', '').trim();
            }
        });

        return report;
    } catch (error) {
        console.error('Error parsing report:', error);
        return null;
    }
}

// Log in to Discord
client.login(process.env.DISCORD_TOKEN);