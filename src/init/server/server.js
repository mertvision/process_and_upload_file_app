/**
 * Initializes and starts the server.
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

const init = async (server, PORT) => {
    let server_address = `http://localhost:${PORT}`

    // Start the server and log a message once it's running
    server.listen(PORT, async ()=> {
        console.log(`Server is running on ${server_address}`);
    });
};

module.exports = init;