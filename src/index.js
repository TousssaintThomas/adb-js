import { exec } from 'child_process'

const cmd = (command) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`)
            return
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`)
            return
        }
        console.log(`stdout: \n ${stdout}`)
    })
}

export const adb = {
    devices: function() {
        console.log('adb devices:')
        cmd('adb devices')
    },
}