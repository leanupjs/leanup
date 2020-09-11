module.exports = (CLI) => {
    CLI.addOptionToCommand(['build', 'serve'], [
        { flags: '--pwa [generateSW|injectManifest]', description: 'gernerate pwa manifest and service worker' },
    ]);
    CLI.addActionToCommand(['build', 'serve'], (options) => {
        const spawnArgs = [];
        if (options.pwa) {
            spawnArgs.push(`--pwa=${options.pwa}`);
        }
        return spawnArgs;
    });
};
export {};
