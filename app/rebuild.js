const fs = require('fs');
const { exec } = require("child_process");

console.log(' -> npm run rebuild # generate folder .nuxt_rebuild');
exec("npm run rebuild", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    } else {

        // удалить папку .nuxt
        console.log(' -> delete folder .nuxt');
        fs.rmdirSync('.nuxt', { recursive: true }); // удаление папки
        console.log(' -> done...');

        // переименовать папку .nuxt_rebuild в .nuxt
        console.log(' -> rename folder .nuxt_rebuild by .nuxt');
        fs.renameSync('.nuxt_rebuild','.nuxt');
        //fs.rmdir('.nuxt'); // удаляем директорию
        console.log(' -> done...');

        // docker restart app-container
        console.log(' -> docker restart app-container');
        exec("docker restart app-container", (error, stdout, stderr) => { // ok
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });

    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});